function updateText() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var a = parseFloat(this.responseText);
      if (isNaN(a)) {
        a = 0;
      }
      var xhttp2 = new XMLHttpRequest();
      xhttp2.onreadystatechange = function () {
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
  let value1;
  let value2;
  fetch("http://localhost:5000/values1")
    .then(response => response.json())
    .then(data => {
      value1 = data.value1;
      updateValues();
    });

  fetch("http://localhost:5000/values2")
    .then(response => response.json())
    .then(data => {
      value2 = data.value2;
      updateValues();
    });
}

function updateValues() {
  document.getElementById("contentGet").innerHTML = value1 + value2;

}
setInterval(getValues, 1000);


/*
function getValues() {
    let value1;
    let value2;
    fetch("http://localhost:5000/values1")
      .then(response => response.json())
      .then(data => {
        value1 = data.value1;
      });
  
    fetch("http://localhost:5000/values2")
      .then(response => response.json())
      .then(data => {
        value2 = data.value2;
      });
    document.getElementById("contentGet").innerHTML = value1 + value2;
}
setInterval(getValues, 1000);
*/