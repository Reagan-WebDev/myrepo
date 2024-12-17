const myBtn1 = document.getElementById("myBtn1");
const myBtn2 = document.getElementById("myBtn2");

myBtn1.addEventListener("click", function myFunction1() {
    document.getElementById("myh1").style.textTransform = "uppercase";
    document.getElementById("myh1").style.textDecoration = "underline";
    document.getElementById("myh1").style.color = "blue";
});

myBtn2.addEventListener("click", myFunction2);

function myFunction2() {
    const paragraphs = document.querySelectorAll("p.myp");
    paragraphs.forEach(p => {
        p.style.backgroundColor = "black";
        p.style.color = "white";
    });

    const capitalParagraphs = document.querySelectorAll("p.myP");
    capitalParagraphs.forEach(p => {
        p.style.color = "red";
        p.style.fontSize = "20px";
    });
}