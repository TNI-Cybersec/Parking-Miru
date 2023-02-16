import cv2
import pickle

width, height = 20, 20

# pickle for (Low Resolution)
try:
    with open('TniParkPos_2', 'rb') as f:
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

    # pickle for (Low Resolution)
    with open('TniParkPos_2', 'wb') as p:
        pickle.dump(posList, p)


while True:
    im = cv2.imread('TniParkImg_2.jpg')
    for pos in posList:
        cv2.rectangle(im, pos, (pos[0] + width, pos[1] + height), (255, 0, 255), 2)

    cv2.imshow("Tni Parking Space_03", im)
    cv2.setMouseCallback("Tni Parking Space_03", mouseClick)
    if cv2.waitKey(1) == ord('q'):
        break
