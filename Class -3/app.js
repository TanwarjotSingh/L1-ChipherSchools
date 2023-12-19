var myname = "Aman";
console.log(myname.length);
console.log(myname.toUpperCase());


var a = 10 + '10';
console.log("a =", a);

var b = 10 - '5';
console.log("b =",b);


var c = Number.MAX_VALUE;
console.log("c = ",c);
var d = Number.MIN_VALUE;
console.log("d =", d);

var isLogin = false;
var customer; //undefined datatype
var accountBalance = null; // null datatype
console.log(isLogin, customer, accountBalance);

var x = 100 / 0;
console.log(x);
if (x){
    console.log("its true");
}else{
    console.log("its false");
}

var num = 10;
console.log(typeof num);
console.log(typeof true);
console.log(typeof 'anyString');
console.log(typeof null);


var val = '200'
console.log("Initial Type :", typeof val);
console.log("To Number :", typeof Number(val));
console.log("To Boolean :", typeof Boolean(val));

