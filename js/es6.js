console.log("es6 Orchard");
// const
// let
// arrow functions
// string templates
// property shorthand
// method properties
// make sure to use 2, 3, 5 and try for 7

const a=8;
console.log("a:", a);
// can't reassign: a=12;
console.log("a2:", a);
// needs jQuery
// const outputDiv=$("#output");

let b=8;
console.log("b:", b);
b=12;
console.log("b2:", b);

function varTest() {
	var x=1;
	if(true) {
		x=2;
		console.log("inside if", x);
	}
	console.log("outside if", x);
}

varTest();


function letTest() {
	let y=1;
	if(true) {
		let y=12;
		console.log("inside if", y);
	}
	console.log("outside if", y);
}

letTest();


var sum = function() {
	let a=1, b=2;
	return a+b;
}
console.log("hardcoded sum in ES5", sum());

var sum2 = () =>{
	let a=1, b=2;
	return a+b;
}
console.log("hardcoded sum in ES5 v2", sum2());


var reflect=function(value) {
	return value;
}

console.log("reflect in ES5:",reflect("Es5 is so yesterday"));

var reflect2= (value) => value;
console.log("reflect in ES6:",reflect("Es6 is the mostess"));


var realSum = function(num1, num2) {
	return num1 + num2;
}
console.log("realsum ES5:", realSum(2,3));

var realSum2 = (num1, num2) => {
	return num1 + num2;
}
console.log("realsum ES6:", realSum(5,4));


// string templates
let m = "biteme";
console.log("m:", m);
let r = "hello my name is ${m}";

console.log("r:", r);


// property shorthand
let wow = "Hi there", es6 = "ES6", numNum = () => {console.log("howdy")}

let myOldObject = {
	wow:wow,
	es6:es6,
	numNum:numNum
}

console.log(myOldObject);


let myNewObject = {
	wow, es6, numNum
}

console.log(myNewObject);


// method properties
var es5Obj = {
	foo: function(){console.log("foo")},
	bar: function(){console.log("bar")}
}
console.log("es5Obj:", es5Obj);

var es6Obj = {
	foo() {console.log("foo")},
	bar() {console.log("bar")}
}
console.log("es6Obj:", es6Obj);


















