setInterval(function() {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  // Set parking noti texts
  const parkingNotiTexts = ["ที่จอดว่าง", "Avaliable", "空車"];
  const parkingIndex = Math.floor(seconds / 10) % parkingNotiTexts.length;
  const parkingNotiText = parkingNotiTexts[parkingIndex];

  // Update title element
  document.getElementById("title").innerHTML = parkingNotiText;
}, 10);