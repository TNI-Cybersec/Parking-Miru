setInterval(function() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
  
    if (hours >= 8 && hours < 16) {
      document.getElementById("scoll").innerHTML = "ที่จอดรถสำหรับบุคลากร";
    }
    else {
      document.getElementById("scoll").innerHTML = "บุคคลทั่วไปสามารถจอดได้";
    }
}, 10);
  