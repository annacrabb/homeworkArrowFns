x = 5;
y = 8;

// Original Functions

function add(x, y){
    return x + y;
}
console.log(add(x, y));

function subtract(x, y){
    return x - y;
}
console.log(subtract(x,y));

function multiply(x, y){
    return x * y;
}
console.log(multiply(x, y));

function divide(x, y){
    if (y != 0) {
        return x / y;
    } else {
        return 0;
    }
}
console.log(divide(x,y));


// Arrow Functions

var sum = (x, y) => x + y;
console.log(sum(x, y));

var diff = (x, y) => x - y;
console.log(diff(x, y));

var prod = (x, y) => x * y;
console.log(prod(x, y));

var quot = (x, y) => x / y;
console.log(quot(x, y));

