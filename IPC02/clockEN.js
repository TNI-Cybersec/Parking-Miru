function refreshTime() {
  var dateString = new Date().toLocaleString("en-GB", {dateStyle: "short",timeStyle: "short",timeZone: "Asia/Bangkok"});
  var formattedString = dateString.replace(", ", " ");
  document.getElementById("date").innerHTML = formattedString;
}
setInterval(refreshTime, 1);