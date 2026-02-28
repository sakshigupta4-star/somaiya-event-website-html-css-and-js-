let event1 = ["Coding Club", "Robotics Club", "AI & Machine Learning Club", "Electronics & IoT Club", "Research & Development (R&D) Club"];
let event2 = ["Dance Club", "Music Club", "Drama/Theatre Club", "Photography & Media Club", "Art & Creativity Club"];

let techClub = document.getElementById("techClub");
let cultClub = document.getElementById("cultClub");

let featuredClub = ["Music Club", "Robotics Club", "Photography & Media Club"];

function displayEvents(eventArray, club)
{
    eventArray.forEach(function (eventName){
        let li = document.createElement("li");
        li.textContent = eventName;

    if(featuredClub.includes(eventName)){
       li.style.color = "gold";
       li.style.fontWeight = "bold";
    }

    club.appendChild(li);

    });
}

let box1 = document.querySelector("ol");
let box2 = document.querySelector("ul");

function countEventsOL(list) {
  let innerLists = list.querySelectorAll("ol"); 
  let count = 0;

  innerLists.forEach(function (ol) {
    count += ol.querySelectorAll("li").length;
  });

  return count;
}

function countEventsUL(list) {
  let innerLists = list.querySelectorAll("ul"); 
  let count = 0;

  innerLists.forEach(function (ul) {
    count += ul.querySelectorAll("li").length;
  });

  return count;
}


displayEvents(event1, techClub);
displayEvents(event2, cultClub);

let tte = document.getElementById("tte");
let te = document.getElementById("te");

tte.textContent = countEventsOL(box1);
te.textContent = countEventsUL(box2);