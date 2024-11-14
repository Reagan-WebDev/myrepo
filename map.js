const numbers = [1,2,3,4,5,6,7,8,9,10];
const numbers1 = numbers.map(cube);
console.log(numbers1);
function square(element){
    return Math.pow(element, 2);
}
function cube(element){
    return Math.pow(element, 3);
}