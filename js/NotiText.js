setInterval(function() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  if (hours >= 8 && hours < 16) {
    if (seconds <= 10) {
      document.getElementById("text").innerHTML = "ที่จอดรถสำหรับบุคลากร";
    } else if (seconds > 10 && seconds <= 20) {
      document.getElementById("text").innerHTML = "Parking for Staff";
    } else if (seconds > 20 && seconds <= 30) {
      document.getElementById("text").innerHTML = "スタッフ用駐車場";
    } else if (seconds > 30 && seconds <= 40) {
      document.getElementById("text").innerHTML = "ที่จอดรถสำหรับบุคลากร";
    } else if (seconds > 40 && seconds <= 50) {
      document.getElementById("text").innerHTML = "Parking for Staff";
    } else {
      document.getElementById("text").innerHTML = "スタッフ用駐車場";
    }
  } else {
    if (seconds <= 10) {
      document.getElementById("text").innerHTML = "บุคคลทั่วไปสามารถจอดได้";
    } else if (seconds > 10 && seconds <= 20) {
      document.getElementById("text").innerHTML = "Guest Parking Available";
    } else if (seconds > 20 && seconds <= 30) {
      document.getElementById("text").innerHTML = "ゲストは駐車できます";
    } else if (seconds > 30 && seconds <= 40) {
      document.getElementById("text").innerHTML = "บุคคลทั่วไปสามารถจอดได้";
    } else if (seconds > 40 && seconds <= 50) {
      document.getElementById("text").innerHTML = "Guest Parking Available";
    } else {
      document.getElementById("text").innerHTML = "ゲストは駐車できます";
    }
  }
}, 10);
