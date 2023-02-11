function refreshTime() {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);
      var dateString = new Date(response.time).toLocaleString("en-GB", {
        dateStyle: "short",
        timeStyle: "medium",
        timeZone: "Asia/Bangkok",
      });
      var formattedString = dateString.replace(", ", " ");
      document.getElementById("date").innerHTML = formattedString;
    }
  };
  request.open("GET", "/time", true);
  request.send();
}

setInterval(refreshTime, 10);
