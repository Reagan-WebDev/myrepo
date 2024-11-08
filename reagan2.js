let myname;
document.getElementById("myButton").onclick = function(){
    myname = document.getElementById("myInput").value;
    document.getElementById("myP").textContent = `My name is ${myname}`;
}