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

var value1;
var value2;
function getData1() {
    fetch('/data1')
        .then(response => response.json())
        .then(data => {
            value1 = parseInt(data.value1);
            document.getElementById("value1").innerHTML = data.value1;
            document.getElementById("result").innerHTML = value1 + value2;
        });
}
function getData2() {
    fetch('/data2')
        .then(response => response.json())
        .then(data => {
            value2 = parseInt(data.value2);
            document.getElementById("value2").innerHTML = data.value2; 
            document.getElementById("result").innerHTML = value1 + value2;
        });
}
        document.getElementById("allresult").innerHTML = value1 + value2;

setInterval(getData1, 1000);
setInterval(getData2, 1000);