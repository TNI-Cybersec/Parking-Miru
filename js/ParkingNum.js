function updateHTML01() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            document.getElementById("content01").innerHTML = this.responseText;
          }
        };
        xhttp.open("GET", "IPC01/Parking_Zone_A.txt", true);
        xhttp.send();
      }
      setInterval(updateHTML01, 1);

      function updateHTML02() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            document.getElementById("content02").innerHTML = this.responseText;
          }
        };
        xhttp.open("GET", "IPC02/Parking_Zone_B.txt", true);
        xhttp.send();
      }
      setInterval(updateHTML02, 1);

      function updateHTML03() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            document.getElementById("content03").innerHTML = this.responseText;
          }
        };
        xhttp.open("GET", "IPC03/Parking_Zone_C.txt", true);
        xhttp.send();
      }
      setInterval(updateHTML03, 1);
