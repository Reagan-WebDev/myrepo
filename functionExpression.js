const numbers = [1,2,3,4,5,6,7,8,9,10];
const squares = numbers.map(function(element){
    return Math.pow(element, 2);
})
const cubes = numbers.map(function(element){
    return Math.pow(element, 3);
})
const total = numbers.reduce(function(accumulator, element){
    return accumulator + element;
})
const isEven = numbers.filter(function(element){
    return element % 2 === 0;
})
const isOdd = numbers.filter(function(element){
    return element % 2 !== 0;
})
const max = numbers.reduce(function(accumulator, element){
    return Math.max(accumulator, element);
})
const min = numbers.reduce(function(accumulator, element){
    return Math.min(accumulator, element);
})
console.log(squares);
console.log(cubes);
console.log(total);
console.log(isEven);
console.log(isOdd);
console.log(max);
console.log(min);