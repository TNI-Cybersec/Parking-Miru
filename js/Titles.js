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

  // Set parking noti texts 空車
  const parkingNotiTexts = ["ที่จอดว่าง", "Avaliable", "空車"];
  const parkingIndex = Math.floor(seconds / 10) % parkingNotiTexts.length;
  const parkingNotiText = parkingNotiTexts[parkingIndex];

  // Update title element
  document.getElementById("title").innerHTML = parkingNotiText;
}, 1000);