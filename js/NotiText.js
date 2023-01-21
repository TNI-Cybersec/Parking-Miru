setInterval(function() {
    var currentTime = new Date();
    var hours = currentTime.getHours();

    if (hours >= 8 && hours < 15) {
      document.getElementById("text").innerHTML = "⛔ ห้ามรถนักศึกษาเข้าจอด";
    }
    else {
      document.getElementById("text").innerHTML = "🆗 รถนักศึกษาเข้ามาจอดได้";
    }
}, 1);
  