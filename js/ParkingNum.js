function updateText() {
  $.ajax({
    url: "FileText/Parking_Zone_B.txt",
    success: function (response) {
      var a = parseInt(response);
      if (isNaN(a)) {
        a = 0;
      }
      $.ajax({
        url: "FileText/Parking_Zone_C.txt",
        success: function (response) {
          var b = parseInt(response);
          if (isNaN(b)) {
            b = 0;
          }
          var c = a + b;
          $("#content").html(c);
        }
      });
    }
  });
}

$(document).ready(function () {
  setInterval(updateText, 1000);
});

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