let numbers = [1,2,3,4,5,6,7,8,9,10];
numbers.forEach(cosine);
numbers.forEach(display);

function double(element,index,array){
    array[index] = element * 2;
}
function triple(element,index,array){
    array[index] = element * 3;
}
function square(element,index,array){
    array[index] = Math.pow(element, 2);
}
function cube(element,index,array){
    array[index] = Math.pow(element, 3);
}
function sine(element,index,array){
    array[index] = Math.sin(element);
}
function cosine(element,index,array){
    array[index] = Math.cos(element);
}

function display(element){
    console.log(element)
}