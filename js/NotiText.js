setInterval(function() {
    var currentTime = new Date();
    var hours = currentTime.getHours();

    if (hours >= 8 && hours < 16) {
      document.getElementById("text").innerHTML = "🅿 ที่จอดรถบุคลากรและอาจารย์";
    }
    else {
      document.getElementById("text").innerHTML = "🅿 ที่จอดรถบุคคลทั่วไป";
    }
}, 10);
  