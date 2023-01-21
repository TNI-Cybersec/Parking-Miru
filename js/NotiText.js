setInterval(function() {
    var currentTime = new Date();
    var hours = currentTime.getHours();

    if (hours >= 8 && hours < 13) {
      document.getElementById("text").innerHTML = "ห้ามรถนักศึกษาจอด";
    }
    else {
      document.getElementById("text").innerHTML = "รถนักศึกษาจอดได้";
    }
}, 1000);
  