import cv2
from datetime import datetime
import cvzone

cap = cv2.VideoCapture('Black Screen.mp4')

while True:
    ret, frame = cap.read()  # read frame/image one by one

    now = datetime.now()
    current_time = now.strftime("%m/%d/%Y, %H:%M:%S")
    text = "Parking"
    text_1 = "Parking Zone A : "
    text_2 = "Parking Zone B : "
    text_3 = "Parking Zone C : "

    font = cv2.FONT_HERSHEY_SIMPLEX  # font to apply on text
    cvzone.putTextRect(frame, f'Parking Zone B : ', (50, 150), scale=7,
                       thickness=10, offset=1920, colorT=(255, 255, 255), colorR=(0, 0, 0))
    # cvzone.putTextRect(frame, text_1, (50, 150), scale=7,
    # cvzone.putTextRect(frame, text_1, (100, 100), font, 2, (255, 255, 255), 5)  # add text on frame
    # cvzone.putTextRect(frame, text_2, (100, 200), font, 2, (255, 255, 255), 5)
    # cvzone.putTextRect(frame, text_3, (100, 300), font, 2, (255, 255, 255), 5)
    cv2.imshow("Test", frame)  # display frame/image

    key = cv2.waitKey(1)  # wait till key press
    if key == ord("q"):  # exit loop on 'q' key press
        break

cap.release()  # release video capture object
cv2.destroyAllWindows()  # destroy all frame windows
