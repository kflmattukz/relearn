//make a function with keyword function and arrow function

function add(x,y) {
    return x+y;
}

function min(x,y) {
    return x-y;
}

function div(x,y) {
    return x/y;
}

function multiply(x,y) {
    return x*y;
}


const myfunc = (name) => {
    console.log('Hello ' + name);
}

console.log(add(2,5));
console.log(min(10,5));
console.log(div(40,10));
console.log(multiply(3,8));