'use strict';
console.log(a);

var a;

helloWorld(); //this will hoist
varFunction(); //this will not hoist
function helloWorld() {
    console.log("Hello World!\nWe can call functions before its declaration");
}

var varFunction = function () {
    console.log("This is Variable function");
}

