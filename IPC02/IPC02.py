import pickle
import queue
import cv2
import cvzone
import numpy as np

q = queue.Queue()

width, height = 30, 20

# Video feed from IPC02 via RTSP
cap = cv2.VideoCapture("rtsp://streaming.planetcloud.cloud:5541/7707ed09-0c72-4429-b2ea-a0cc521773ea/0")

# Video feed via File Local
# cap = cv2.VideoCapture('TniPark_M.mp4')

# Position Detection
with open('TniParkPos', 'rb') as f:
    posList = pickle.load(f)


def checkParkingSpace(imgPro):
    spaceCounter = 0

    for pos in posList:
        x, y = pos

        imgCrop = imgPro[y:y + height, x:x + width]
        # cv2.imshow(str(x * y), imgCrop)
        count = cv2.countNonZero(imgCrop)

        if count < 50:
            color = (0, 255, 0)
            thickness = 2
            spaceCounter += 1
        else:
            color = (0, 0, 255)
            thickness = 3

        cv2.rectangle(img, pos, (pos[0] + width, pos[1] + height), color, thickness)

        # Record Variable in Text File
        d = spaceCounter
        with open('Parking_Zone_B.txt', 'w') as f:
            f.write(str(d) + '\n')

        # Show count on rectangle space
        cvzone.putTextRect(img, str(count), (x, y + height - 3), scale=1, thickness=2, offset=0, colorR=color)

    # Show Info on Camera
    cvzone.putTextRect(img, f'Parking Zone B : {spaceCounter} from {len(posList)} Slot', (20, 49), scale=3,
                       thickness=3, offset=20, colorR=(0, 0, 0))

    # Show Info Full Screen
    # cvzone.putTextRect(img, f'Parking Zone B : {spaceCounter}', (430, 150), scale=7,
    #                    thickness=10, offset=1920, colorT=(255, 255, 255), colorR=(0, 0, 0))


while True:
    # RTSP H.264 Codec Video
    ret, img = cap.read()
    if cv2.waitKey(1) == ord('q'):
        break

        # For Video feed via RTSP
        cv2.destroyAllWindows()
        cap.release()

    if cap.get(cv2.CAP_PROP_POS_FRAMES) == cap.get(cv2.CAP_PROP_FRAME_COUNT):
        cap.set(cv2.CAP_PROP_POS_FRAMES, 0)

    success, img = cap.read()
    imgGray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    imgBlur = cv2.GaussianBlur(imgGray, (3, 3), 1)
    imgThreshold = cv2.adaptiveThreshold(imgBlur, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C,
                                         cv2.THRESH_BINARY_INV, 25, 16)
    imgMedian = cv2.medianBlur(imgThreshold, 5)
    kernel = np.ones((3, 3), np.uint8)
    imgDilate = cv2.dilate(imgMedian, kernel, iterations=1)

    checkParkingSpace(imgDilate)

    cv2.imshow("Tni Parking IPC02", img)
