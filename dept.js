let vissionButton = document.getElementById("toggle1");
let vissionText = document.querySelector("p");

let vb = document.querySelector(".vission");
let mb = document.querySelector(".mission");

let missionButton = document.getElementById("toggle2");
let missionText = mb.querySelector("p");

   vissionButton.addEventListener("click", function(){
      if(vissionText.style.display === "none"){
        vissionText.style.display = "block";
        vissionButton.innerText = "Hide";
        vissionButton.style.backgroundColor = "red";
      }else{
        vissionText.style.display = "none";
        vissionButton.innerText = "Show";
        vissionButton.style.backgroundColor = "green";
      }
   });

   missionButton.addEventListener("click", function(){
      if(missionText.style.display === "none"){
        missionText.style.display = "block";
        missionButton.innerText = "Hide";
        missionButton.style.backgroundColor = "red";
      }else{
        missionText.style.display = "none";
        missionButton.innerText = "Show";
        missionButton.style.backgroundColor = "green";
      }
   });