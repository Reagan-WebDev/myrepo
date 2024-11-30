const ONlight = document.getElementById("lightON");
const OFFlight = document.getElementById("lightOFF");
const BulbImage = document.getElementById("myImage");
ONlight.addEventListener("click", event => {
    BulbImage.src = "images/bulbon-removebg-preview.png";
    BulbImage.alt = "Light Is On";
})
OFFlight.addEventListener("click", event => {
    BulbImage.src = "images/bulboff-removebg-preview.png";
    BulbImage.alt = "Light Is Off";
})