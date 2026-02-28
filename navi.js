let navBox = document.querySelector(".nav-box");
let links = navBox.querySelectorAll("a");

links.forEach(function(link){
    link.addEventListener("mouseover", function(){
    link.style.color = "gold";
    link.style.fontSize = "1rem";
    });

    link.addEventListener("mouseout", function(){
    link.style.color = "white";
    link.style.fontSize = "";
    });
})

