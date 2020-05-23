console.log("Hello World");


// Bitwise Operator
// 1 - 00000001
// 2 - 00000010
// R - 00000011 - reuslt  - Bitwise OR
// R - 00000000 - reuslt  - Bitwise AND
console.log('BitWise Or 1 |2 is ',1 | 2);	// Bitwise OR
console.log('BitWise And 1 |2 is ',1 & 2);	// Bitwise AND

// Real time Example
const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;
// myPermission = myPermission | writePermission;
let message = (myPermission & readPermission) ? 'yes': 'no';

console.log(message);

// Precedence 
let x = 2 + 3 * 4;
console.log(x);

//Q1 - 
let x1 = 10;

let y1 = (x1 > 5) && (x1 < 15); 

console.log(y1);

//Q2 - What is value of X 
let x2= 5;
x2 +=3;
console.log(x2);
// Q3 - what is value of y
let x3 = 10;
let y3 = x3++;
console.log(y3);

let x4 = 10;
let y4 = ++x4;
console.log(y4);

// Q4 - what is value of y
let x5 = 1;
let y5 = x!==2;

console.log(y5);

// Swap A and B
let a = true;
let b = false;

let c = a;
a = b;
b = c;
console.log(a);
console.log(b);

