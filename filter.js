const students = ["Reagan", "Jeff", "Christintus", "John", "Jane", "Doe"];
const shortName = students.filter(getshortName);
const longName = students.filter(getLongName);
console.log(shortName);
console.log(longName);
function getshortName(element){
    return element.length < 5;
}
function getLongName(element){
    return element.length >= 5;
}