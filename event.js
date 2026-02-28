const totalSeats = 50;

let registeredSeats = localStorage.getItem("registeredSeats");
registeredSeats = (registeredSeats)? Number(registeredSeats) : 0;

let remainingSeats = totalSeats - registeredSeats;

document.getElementById("totalSeats").textContent = totalSeats;
document.getElementById("registeredSeats").textContent = registeredSeats;

let isAvailable = remainingSeats > 0;

document.getElementById("availability").textContent = 
(isAvailable)? "Seats are available" : "Seats full";

let category = document.getElementById("category");
let categoryName = document.getElementById("categoryName");
let message = document.getElementById("catMsg");

category.addEventListener("change", function() {

    let selectedValue = category.value;

    if (selectedValue === "technical") {
        categoryName.textContent = "Category: Technical";
        categoryName.style.textAlign = "center";
        catMsg.textContent = "Technical events focus on coding, robotics, AI and innovation.";
        catMsg.style.textAlign = "center";

    } else if (selectedValue === "cultural") {
        categoryName.textContent = "Category: Cultural";
        categoryName.style.textAlign = "center";
        catMsg.textContent = "Cultural events include dance, music, drama and creativity.";
        catMsg.style.textAlign = "center";

    } else if (selectedValue === "sports") {
        categoryName.textContent = "Category: Sports";
        categoryName.style.textAlign = "center";
        catMsg.textContent = "Sports events test teamwork, fitness and competitive spirit.";
        catMsg.style.textAlign = "center";
    } else {
        categoryName.textContent = "";
        catMsg.textContent = "";
    }

});