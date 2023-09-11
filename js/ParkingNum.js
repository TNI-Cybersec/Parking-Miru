/* 
Copyright (c) 2023 Parking Miru Web Engine By Karin Vitoonkijvanit

*** Unauthorized modification of files in Parking Miru Web Engine
shall not be held liable for any damages or errors. and
It is a disruption of Parking Miru Web Engine's system. *** 
*/

const fetchValueFromFile = (url) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: url,
      dataType: 'text', // Explicitly mention the expected dataType
      success: (response) => {
        const value = parseInt(response, 10);
        if (isNaN(value)) {
          reject(new Error(`Failed to parse value from ${url}`));
        }
        resolve(value);
      },
      error: (xhr, status, error) => {
        reject(new Error(`Failed to fetch data from ${url}: ${error}`));
      }
    });
  });
};

const updateContentValue = async () => {
  try {
    const a = await fetchValueFromFile("FileText/Parking_Zone_B.csv");
    const b = await fetchValueFromFile("FileText/Parking_Zone_C.csv");
    const sum = a + b;
    $("#content").text(sum);
  } catch (err) {
    console.error(err);
  }
};

$(document).ready(() => {
  setInterval(updateContentValue, 1000);
});



/*
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
    var a = await fetchTextFile("FileText/Parking_Zone_B.csv");
    var b = await fetchTextFile("FileText/Parking_Zone_C.csv");
    var c = a + b;
    $("#content").text(c);
  } catch (err) {
    console.error(err);
  }
}

$(document).ready(function() {
  setInterval(updateText, 1000);
});


*/


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

function debounce(func, wait) {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    const later = function() {
      timeout = null;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
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
  const debouncedUpdateText = debounce(updateText, 1000);
  setInterval(debouncedUpdateText, 1000);
});

WebSocket

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

function debounce(func, wait) {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    const later = function() {
      timeout = null;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
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
  const debouncedUpdateText = debounce(updateText, 1000);
  const socket = new WebSocket("ws://example.com/path/to/socket");
  socket.addEventListener("message", () => {
    debouncedUpdateText();
  });
});


function fetchCSVFile(url) {
  return new Promise(function(resolve, reject) {
    $.get({
      url: url,
      dataType: "text", // use "text" instead of "csv" to avoid automatic parsing
      success: function(response) {
        // extract the first value of the first line of the CSV data
        var firstValue = response.split("\n")[0].split(",")[0];
        resolve(parseInt(firstValue));
      },
      error: function(xhr, status, error) {
        reject(new Error("Failed to fetch data from " + url + ": " + error));
      }
    });
  });
}

async function updateText() {
  try {
    var a = await fetchCSVFile("FileText/Parking_Zone_B.csv");
    var b = await fetchCSVFile("FileText/Parking_Zone_C.csv");
    var c = a + b;
    $("#content").text(c);
  } catch (err) {
    console.error(err);
  }
}

$(document).ready(function() {
  setInterval(updateText, 1000);
});

*/
