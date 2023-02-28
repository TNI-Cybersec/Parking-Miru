/* 
Copyright (c) 2023 Parking Miru Web Engine By Karin Vitoonkijvanit

*** Unauthorized modification of the files in the Parking Miru Web Engine 
section is not responsible for any damage or errors that will occur and 
constitutes a violation of the of the creators of the Web Engine. *** 
*/

function refreshTime() {
  var dateString = new Date().toLocaleString("en-GB", {
    dateStyle: "short",
    timeStyle: "medium",
    timeZone: "Asia/Bangkok",
  });
  var formattedString = dateString.replace(", ", " ");
  document.getElementById("date").innerHTML = formattedString;
}
setInterval(refreshTime, 1000);