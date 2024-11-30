const ONbulb = document.getElementById("bulbON");
const OFFbulb = document.getElementById("bulbOFF");
const myimage = document.getElementById("myimg");
ONbulb.addEventListener("click", () => {
    myimage.src = "images/bulbon-removebg-preview.png";
    myimage.alt = "bulb on image";
})
OFFbulb.addEventListener("click", () => {
    myimage.src = "images/bulboff-removebg-preview.png";
    myimage.alt = "bulb off image";
})