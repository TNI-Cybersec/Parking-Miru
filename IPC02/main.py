import pickle
import queue
import cv2
import cvzone
import numpy as np

q = queue.Queue()

width, height = 30, 40
global im
im = None

# Video feed from IPC02 via RTSP (High Resolution)
cap = cv2.VideoCapture("rtsp://streaming.planetcloud.cloud:5541/7707ed09-0c72-4429-b2ea-a0cc521773ea/0")
"""
# Video feed via File Local (for Fastest Code)
# cap = cv2.VideoCapture('TniPark_M.mp4')
"""
# Set the buffer size
cap.set(cv2.CAP_PROP_BUFFERSIZE, 256)

# Position Detection (High Resolution)
with open('TniParkPos', 'rb') as f:
    posList = pickle.load(f)


def checkParkingSpace(imPro):
    spaceCounter = 0

    for pos in posList:
        x, y = pos

        imCrop = imPro[y:y + height, x:x + width]
        count = cv2.countNonZero(imCrop)

        if count < 100:
            color = (0, 255, 0)
            thickness = 2
            spaceCounter += 1
        else:
            color = (0, 0, 255)
            thickness = 3
        
        # Show rectangle space
        cv2.rectangle(im, pos, (pos[0] + width, pos[1] + height), color, thickness)
        
        # Record Variable in Text File
        d = spaceCounter
        with open('../FileText/Parking_Zone_B.csv', 'w') as t:
            t.write(str(d) + '\n')
        
        # Show count on rectangle space
        cvzone.putTextRect(im, str(count), (x, y + height - 3), scale=1, thickness=2, offset=0, colorR=color)
        

    # Show Info on Camera (High Resolution)
    cvzone.putTextRect(im, f'Parking Lot Center : {spaceCounter} from {len(posList)}', (20, 49), scale=3,
                       thickness=3, offset=20, colorR=(0, 0, 0))

    """
    # Show Info Full Screen (High Resolution)
    cvzone.putTextRect(im, f'Parking Lot Center : {spaceCounter}', (430, 150), scale=7,
                       thickness=10, offset=1920, colorT=(255, 255, 255), colorR=(0, 0, 0))
    """


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

    cv2.imshow("Tni Parking IPC02", im)
