/* 
Copyright (c) 2023 Parking Miru Web Engine By Karin Vitoonkijvanit

*** Unauthorized modification of files in Parking Miru Web Engine
shall not be held liable for any damages or errors. and
It is a disruption of Parking Miru Web Engine's system. *** 
*/

function refreshTime() {
  var dateString = new Date().toLocaleString("en-GB", {
    dateStyle: "short",
    timeStyle: "medium",
    timeZone: "Asia/Bangkok",
  });
  var formattedString = dateString.replace(", ", " ");
  document.getElementById("dateTime").innerHTML = formattedString;
}
setInterval(refreshTime, 1000);