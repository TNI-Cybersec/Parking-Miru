/* 
Copyright (c) 2023 Parking Miru Web Engine By Karin Vitoonkijvanit

*** Unauthorized modification of the files in the Parking Miru Web Engine 
section is not responsible for any damage or errors that will occur and 
constitutes a violation of the of the creators of the Web Engine. *** 
*/

setInterval(function() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
  
    if (hours >= 8 && hours < 16) {
      document.getElementById("scoll").innerHTML = "ตอนนี้ที่จอดรถสำหรับสำหรับบุคลากรจอดเท่านั้น บุคคลภายนอกยังไม่สามารถจอดที่ตรงนี้ได้";
    }
    else {
      document.getElementById("scoll").innerHTML = "ตอนนี้บุคคลทั่วไปสามารถจอดได้เลย";
    }
}, 1000);
  