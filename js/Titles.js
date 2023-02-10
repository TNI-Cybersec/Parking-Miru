setInterval(function () {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  //Set Parking for Staff Noti Text.
  var TH = "ที่จอดว่าง";
  var EN = "Avaliable";
  var JP = "空車";
  //Set Parking for Guest Noti Text.

  if (seconds <= 10) {
    document.getElementById("title").innerHTML = TH;
  } else if (seconds > 10 && seconds <= 20) {
    document.getElementById("title").innerHTML = EN;
  } else if (seconds > 20 && seconds <= 30) {
    document.getElementById("title").innerHTML = JP;
  } else if (seconds > 30 && seconds <= 40) {
    document.getElementById("title").innerHTML = TH;
  } else if (seconds > 40 && seconds <= 50) {
    document.getElementById("title").innerHTML = EN;
  } else {
    document.getElementById("title").innerHTML = JP;
  }
}, 10);
