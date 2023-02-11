setInterval(function() {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  // Set parking noti texts
  const parkingTexts = {
    staff: ["ที่จอดรถบุคลากร", "Staff Parking", "スタッフ用駐車場"],
    guest: ["บุคคลทั่วไปจอดได้", "Guest Parking", "ゲスト用駐車場"],
  };
  const parkingIndex = Math.floor(seconds / 10) % parkingTexts.staff.length;
  const parkingNotiText = (hours >= 8 && hours < 16) ? parkingTexts.staff[parkingIndex] : parkingTexts.guest[parkingIndex];

  // Update text element
  document.getElementById("text").innerHTML = parkingNotiText;
}, 10);

/*
setInterval(function () {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  //Set Parking for Staff Noti Text.
  var Aa = "ที่จอดรถบุคลากร";
  var Ab = "Staff Parking";
  var Ac = "スタッフ用駐車場";
  //Set Parking for Guest Noti Text.
  var Ba = "บุคคลทั่วไปจอดได้";
  var Bb = "Guest Parking";
  var Bc = "ゲスト用駐車場";


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
*/
