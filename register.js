const totalSeats = 50;

let registeredSeats = localStorage.getItem("registeredSeats");
registeredSeats = (registeredSeats)? Number(registeredSeats):0;

document.getElementById("registrationForm").addEventListener("submit", function(event){

     event.preventDefault();

    if(registeredSeats < totalSeats){
        registeredSeats++;
        localStorage.setItem("registeredSeats", registeredSeats);
        alert("Registration successfull");
    }else{
       alert("Registration full");
    }
});