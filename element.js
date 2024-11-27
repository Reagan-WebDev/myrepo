const myH2Elements = document.getElementsByTagName("h2");
const ulElements = document.getElementsByTagName("ul");
for(let myH2Element of myH2Elements){
    myH2Element.style.backgroundColor = "red";
}
for(let ulElement of ulElements){
    ulElement.style.backgroundColor = "green";
}