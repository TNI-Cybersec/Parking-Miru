/* 
Copyright (c) 2023 Parking Miru Web Engine By Karin Vitoonkijvanit

*** Unauthorized modification of the files in the Parking Miru Web Engine 
section is not responsible for any damage or errors that will occur and 
constitutes a violation of the of the creators of the Web Engine. *** 
*/
setInterval(function() {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  // Set parking noti texts
  const parkingNotiTexts = ["ที่จอดว่าง", "Avaliable", "空車"];
  const parkingIndex = Math.floor(seconds / 10) % parkingNotiTexts.length;
  const parkingNotiText = parkingNotiTexts[parkingIndex];

  // Update title element
  document.getElementById("title").innerHTML = parkingNotiText;
}, 1000);