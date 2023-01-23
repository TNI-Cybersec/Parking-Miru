import pickle
import queue
import cv2
import cvzone
import numpy as np

q = queue.Queue()

width, height = 30, 20

# Video feed from IPC01 via RTSP
global im
im = None
cap = cv2.VideoCapture("rtsp://streaming.planetcloud.cloud:5541/1f9fc0c7-8e74-43fc-8758-dfeb8c09d8f0/0")

# Set the buffer size
cap.set(cv2.CAP_PROP_BUFFERSIZE, 256)

# Video feed via File Local
# cap = cv2.VideoCapture('TniPark_M.mp4')

# Position Detection
with open('TniParkPos', 'rb') as f:
    posList = pickle.load(f)


def checkParkingSpace(imPro):
    spaceCounter = 0

    for pos in posList:
        x, y = pos

        imCrop = imPro[y:y + height, x:x + width]
        # cv2.imshow(str(x * y), imCrop)
        count = cv2.countNonZero(imCrop)

        if count < 50:
            color = (0, 255, 0)
            thickness = 2
            spaceCounter += 1
        else:
            color = (0, 0, 255)
            thickness = 3

        cv2.rectangle(im, pos, (pos[0] + width, pos[1] + height), color, thickness)

        # Record Variable in Text File
        d = spaceCounter
        with open('../FileText/Parking_Zone_A.txt', 'w') as f:
            f.write(str(d) + '\n')

        # Show count on rectangle space
        cvzone.putTextRect(im, str(count), (x, y + height - 3), scale=1, thickness=2, offset=0, colorR=color)

    # Show Info on Camera
    cvzone.putTextRect(im, f'Parking Zone A : {spaceCounter} from {len(posList)} Slot', (20, 49), scale=3,
                        thickness=3, offset=20, colorR=(0, 0, 0))

    # Show Info Full Screen
    # cvzone.putTextRect(im, f'Parking Zone A : {spaceCounter}', (430, 150), scale=7,
    #                   thickness=10, offset=1920, colorT=(255, 255, 255), colorR=(0, 0, 0),)


while True:
    # RTSP H.264 Codec Video
    ret, im = cap.read()
    if cv2.waitKey(1) == ord('q'):
        break

    # For Video feed via RTSP
    cv2.destroyAllWindows()
    cap.release()

    if cap.get(cv2.CAP_PROP_POS_FRAMES) == cap.get(cv2.CAP_PROP_FRAME_COUNT):
        cap.set(cv2.CAP_PROP_POS_FRAMES, 0)

    success, im = cap.read()
    imGray = cv2.cvtColor(im, cv2.COLOR_BGR2GRAY)
    imBlur = cv2.GaussianBlur(imGray, (3, 3), 1)
    imThreshold = cv2.adaptiveThreshold(imBlur, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C,
                                         cv2.THRESH_BINARY_INV, 25, 16)
    imMedian = cv2.medianBlur(imThreshold, 5)
    kernel = np.ones((3, 3), np.uint8)
    imDilate = cv2.dilate(imMedian, kernel, iterations=1)

    checkParkingSpace(imDilate)

    cv2.imshow("Tni Parking IPC01", im)
