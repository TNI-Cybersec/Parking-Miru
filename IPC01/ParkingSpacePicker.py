import cv2
import pickle

width, height = 30, 20

try:
    with open('TniParkPos', 'rb') as f:
        posList = pickle.load(f)
except:
    posList = []


def mouseClick(events, x, y, flags, params):
    if events == cv2.EVENT_LBUTTONDOWN:
        posList.append((x, y))
    if events == cv2.EVENT_RBUTTONDOWN:
        for i, pos in enumerate(posList):
            x1, y1 = pos
            if x1 < x < x1 + width and y1 < y < y1 + height:
                posList.pop(i)

    with open('TniParkPos', 'wb') as f:
        pickle.dump(posList, f)


while True:
    img = cv2.imread('TniParkImg.jpg')
    for pos in posList:
        cv2.rectangle(img, pos, (pos[0] + width, pos[1] + height), (255, 0, 255), 2)

    cv2.imshow("Tni Parking Space_01", img)
    cv2.setMouseCallback("Tni Parking Space_01", mouseClick)
    cv2.waitKey(1)