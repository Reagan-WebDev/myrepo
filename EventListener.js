const Event = document.getElementById("Event");
Event.addEventListener("click", event => {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OT 👍" ;
})