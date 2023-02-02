setInterval(function() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

//Set Parking for Staff Noti Text.
  var Aa = "ที่จอดรถสำหรับบุคลากร";
  var Ab = "Parking for Staff";
  var Ac = "スタッフ用駐車場";
//Set Parking for Guest Noti Text.
  var Ba = "บุคคลทั่วไปสามารถจอดได้";
  var Bb = "Guest Parking Available";
  var Bc = "ゲストは駐車できます";


  if (hours >= 8 && hours < 16) {
    if (seconds <= 10) {
      document.getElementById("text").innerHTML = Aa;
    } else if (seconds > 10 && seconds <= 20) {
      document.getElementById("text").innerHTML = Ab;
    } else if (seconds > 20 && seconds <= 30) {
      document.getElementById("text").innerHTML = Ac;
    } else if (seconds > 30 && seconds <= 40) {
      document.getElementById("text").innerHTML = Aa;
    } else if (seconds > 40 && seconds <= 50) {
      document.getElementById("text").innerHTML = Ab;
    } else {
      document.getElementById("text").innerHTML = Ac;
    }
  } else {
    if (seconds <= 10) {
      document.getElementById("text").innerHTML = Ba;
    } else if (seconds > 10 && seconds <= 20) {
      document.getElementById("text").innerHTML = Bb;
    } else if (seconds > 20 && seconds <= 30) {
      document.getElementById("text").innerHTML = Bc;
    } else if (seconds > 30 && seconds <= 40) {
      document.getElementById("text").innerHTML = Ba;
    } else if (seconds > 40 && seconds <= 50) {
      document.getElementById("text").innerHTML = Bb;
    } else {
      document.getElementById("text").innerHTML = Bc;
    }
  }
}, 10);
