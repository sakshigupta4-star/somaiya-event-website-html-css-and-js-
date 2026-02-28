let name = "Sakshi";

let msg = document.getElementById("wel-msg");
msg.innerText = "Welcome"+name+"!";
msg.style.textAlign = "center";
msg.style.color = "red";

let currentDate = document.querySelector("#current-date");
let cd = new Date();
let formattedDate = cd.toDateString();

currentDate.innerText = "Today's date:- "+formattedDate;
currentDate.style.color = "white";
currentDate.style.position = "absolute";
currentDate.style.right = "0px";