import cv2
import pickle

width, height = 60, 20

# pickle (High Resolution)
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

    # pickle for (High Resolution)
    with open('TniParkPos', 'wb') as p:
        pickle.dump(posList, p)


while True:
    im = cv2.imread('TniParkImg.jpg')
    for pos in posList:
        cv2.rectangle(im, pos, (pos[0] + width, pos[1] + height), (255, 0, 255), 2)

    cv2.imshow("Tni Parking Space_02", im)
    cv2.setMouseCallback("Tni Parking Space_02", mouseClick)
    if cv2.waitKey(1) == ord('q'):
        break
