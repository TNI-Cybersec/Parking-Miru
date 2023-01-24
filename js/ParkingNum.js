function updateHTML01() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("content01").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "FileText/Parking_Zone_B.txt", true);
  xhttp.send();
}
setInterval(updateHTML01, 10);