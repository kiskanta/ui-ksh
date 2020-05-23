/**
variables : 

var
* Cannot be a reserved keyword	// var is reserved word.
* Should be meaningful
* Cannot start with a number(1name)
* Cannot contain a space or hyphen (-)
* Are case-sensitive (firstName and FirstName are different)

**/

let name;

console.log(name);


let name1 = 'Kishore';
console.log(name1);

/**
Constants: const - assigned at the time of declaration. 
* constants are read-only, therefore you can not modify them later on.

*/
const interestRate = 0.3;
//interestRate = 1;
console.log(interestRate);


/**

primitives/Valye Types		Refernce Type
String						Object
Number
Boolean
NaN
undefined

*/

let name23= 'Krishna Rao';	// String Literal
let age = 30; 				// Number Literal
let isApproved = false; 	// Boolean Literal
let firstName = undefined;	// 
let selectedColor = null;	// 

/**
Static (statically-typed)
Dynamic 
*/


/**
Object
*/
let person = {
	name: 'Kihosre',
	age: 28
}

// Dot notation
person.name = 'Krishna';

// Breaket Notation
person['name'] = 'Ranga Rao';

let selection = 'name';
person[selection] = 'KisKanta';

console.log(person.name);

/**
Arrays: 
Types of element is dynamic
*/

let selectedColors = ['red', 'blue'];
console.log(selectedColors);
selectedColors[0] ='Pink';
console.log(selectedColors[0]);

console.log(typeof selectedColors);
console.log(selectedColors.length);

/**
Functions : set of statments 
*/
greet();
function greet(){
	console.log('Hello Kingshore');
}
greet('Kishore');
function greet(name){
	console.log('Hello Function', name);
}
/**
Types of Functions : 
*/
// Performing a task
greet('Kishore', 'Kanta');
function greet(name, lastName){
	console.log('Hello '+name+', lastName : ',lastName);
}

console.log(square(5));
//Calculating a value
function square(number){
	return number * number;
}
/**
Referneeces:
https://www.w3resource.com/javascript/variables-literals/variables-datatype.php
*/