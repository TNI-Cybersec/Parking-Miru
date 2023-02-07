function updateText() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var a = parseFloat(this.responseText);
            if (isNaN(a)) {
                a = 0;
            }
            var xhttp2 = new XMLHttpRequest();
            xhttp2.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var b = parseFloat(this.responseText);
                    if (isNaN(b)) {
                        b = 0;
                    }
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
setInterval(updateText, 1000);  

function getValues() {
    fetch("http://localhost:5000/values")
      .then(response => response.json())
      .then(data => {
        document.getElementById("contentGet").innerHTML =
          data.value1 + data.value2;
      });
  }
  
  setInterval(getValues, 1000);  