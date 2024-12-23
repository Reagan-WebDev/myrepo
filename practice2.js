const backgrounds = [
    'url("backgroundimgs/backgroundimage.jpg")',
    'url("backgroundimgs/background1.jpg")',
    'url("backgroundimgs/background2.jpg")',
    'url("backgroundimgs/background3.jpg")',
    'url("backgroundimgs/background4.jpg")',
    'url("backgroundimgs/background5.jpg")'
];

let currentIndex = 0;

function changeBackground() {
    document.body.style.backgroundImage = backgrounds[currentIndex];
    currentIndex = (currentIndex + 1) % backgrounds.length; 
}

setInterval(changeBackground, 10000);

changeBackground();
