/* 
Copyright (c) 2023 Parking Miru Web Engine By Karin Vitoonkijvanit

*** Unauthorized modification of files in Parking Miru Web Engine
shall not be held liable for any damages or errors. and
It is a disruption of Parking Miru Web Engine's system. *** 
*/

setInterval(function() {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  // Set parking noti texts スタッフ用駐車場 ゲスト用駐車場
  const parkingTexts = {
    staff: ["ที่จอดรถบุคลากร", "Personnel Parking"],
    guest: ["บุคคลทั่วไปจอดได้", "Guest Parking"],
  };
  const parkingIndex = Math.floor(seconds / 10) % parkingTexts.staff.length;
  const parkingNotiText = (hours >= 8 && hours < 16) ? parkingTexts.staff[parkingIndex] : parkingTexts.guest[parkingIndex];

  // Update text element
  document.getElementById("text").innerHTML = parkingNotiText;
}, 1000);