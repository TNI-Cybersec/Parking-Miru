setInterval(function() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();

  if (hours >= 8 && hours < 16) {
    if (minutes % 2 === 0) {
      document.getElementById("text").innerHTML = "ที่จอดรถสำหรับบุคลากร";
    } else {
      document.getElementById("text").innerHTML = "Parking for Staff";
    }
  } else {
    if (minutes % 2 === 0) {
      document.getElementById("text").innerHTML = "บุคคลทั่วไปสามารถจอดได้";
    } else {
      document.getElementById("text").innerHTML = "Public Parking Available";
    }
  }
}, 10);
