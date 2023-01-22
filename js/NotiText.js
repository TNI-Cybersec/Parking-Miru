setInterval(function() {
    var currentTime = new Date();
    var hours = currentTime.getHours();

    if (hours >= 8 && hours < 15) {
      document.getElementById("text").innerHTML = "🛑 รถบุคลากรจอดเท่านั้น";
    }
    else {
      document.getElementById("text").innerHTML = "🆗 รถทุกท่านเข้ามาจอดได้";
    }
}, 1);
  