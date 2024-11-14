const prices = [100, 205, 300, 301, 40, 57];
const total = prices.reduce(sum);
const max = prices.reduce(getMax);
const min = prices.reduce(getMin);
console.log(`$${total.toFixed(2)}`);
console.log(`$${max.toFixed(2)}`);
console.log(`$${min.toFixed(2)}`);
function sum(accumulator, element){
    return accumulator + element;
}
function getMax(accumulator, element){
    return Math.max(accumulator, element);
}
function getMin(accumulator, element){
    return Math.min(accumulator, element)
}