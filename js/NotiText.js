setInterval(function() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  if (hours >= 8 && hours < 16) {
    if (seconds <= 20) {
      document.getElementById("text").innerHTML = "ที่จอดรถสำหรับบุคลากร";
    } else if (seconds > 20 && seconds <= 40) {
      document.getElementById("text").innerHTML = "Parking for Staff";
    } else {
      document.getElementById("text").innerHTML = "スタッフ用駐車場";
    }
  } else {
    if (seconds <= 20) {
      document.getElementById("text").innerHTML = "บุคคลทั่วไปสามารถจอดได้";
    } else if (seconds > 20 && seconds <= 40) {
      document.getElementById("text").innerHTML = "Public Parking Available";
    } else {
      document.getElementById("text").innerHTML = "一般人も駐車できます";
    }
  }
}, 10);
