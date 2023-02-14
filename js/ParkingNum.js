function fetchTextFile(url) {
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: url,
      success: function(response) {
        var value = parseInt(response);
        if (isNaN(value)) {
          reject(new Error("Failed to parse value from " + url));
        }
        resolve(value);
      },
      error: function(xhr, status, error) {
        reject(new Error("Failed to fetch data from " + url + ": " + error));
      }
    });
  });
}

async function updateText() {
  try {
    var a = await fetchTextFile("FileText/Parking_Zone_B.txt");
    var b = await fetchTextFile("FileText/Parking_Zone_C.txt");
    var c = a + b;
    $("#content").text(c);
  } catch (err) {
    console.error(err);
  }
}

$(document).ready(function() {
  setInterval(updateText, 1000);
});


/*
If Use

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