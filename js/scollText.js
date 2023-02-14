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
  