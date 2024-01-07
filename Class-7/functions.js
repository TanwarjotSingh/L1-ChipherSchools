

var x = 100;
let y = 200;
const z = 300;

(function () {
    var a = "This is NOT a global vaiable";
    console.log("Funciton");
})();

let say = (b) => {
    console.log("hey ", b);
}
// console.log(a);

let says = function () {
    console.log("saying someting");
}

say("aman");
say("Rosy");

// implicit conversion

// function areaOfSquare(sides) {
//     console.log('Area of Square is', sides ** 2);
// }

// areaOfSquare('2');



// Default argument

// function areaOfSquare(sides=5) {
//     console.log('Area of Square is', sides ** 2);
// }

// areaOfSquare('2');


// basic arrow function

const areaOfSquare = sides => {    
    return sides **2;
}

console.log(areaOfSquare(10)); // OUTPUT: 100

const area = sides => sides ** 2;

console.log(area(10)); // OUTPUT: 100

console.log('\n\n');

// call back function
// Functional Programming

const areaOfSq = (sides, shape = 'square') => {
    console.log(shape);
    return sides ** 2;    
}

const show = (myFunc, shape) => {
    let value = 2;
    console.log(myFunc(value, shape));
}

let shape = 'circle';
show(areaOfSq, shape);

