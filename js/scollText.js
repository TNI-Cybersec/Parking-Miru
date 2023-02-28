/* 
Copyright (c) 2023 Parking Miru Web Engine By Karin Vitoonkijvanit

*** Unauthorized modification of files in Parking Miru Web Engine
shall not be held liable for any damages or errors. and
It is a disruption of Parking Miru Web Engine's system. *** 
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
  