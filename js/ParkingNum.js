function updateText() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var a = parseInt(this.responseText);
          var xhttp2 = new XMLHttpRequest();
          xhttp2.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
                  var b = parseInt(this.responseText);
                  var c = a + b;
                  document.getElementById("content").innerHTML = c;
              }
          };
          xhttp2.open("GET", "FileText/Parking_Zone_C.txt", true);
          xhttp2.send();
      }
  };
  xhttp.open("GET", "FileText/Parking_Zone_B.txt", true);
  xhttp.send();
}
setInterval(updateText, 100);