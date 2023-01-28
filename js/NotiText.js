setInterval(function() {
  var currentTime = new Date();
  var hours = currentTime.getHours();

  if (hours >= 8 && hours < 16) {
    document.getElementById("text").innerHTML = "🅿 ที่จอดรถสำหรับบุคลากร";
  }
  else {
    document.getElementById("text").innerHTML = "🅿 บุคคลทั่วไปสามารถจอดได้";
  }
}, 10);
