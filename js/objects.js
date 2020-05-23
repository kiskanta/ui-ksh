/**
Objects
*/

let radius = 1;
let x = 1;
let y = 2;

const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  isVisable: true,
  draw: function() {
    console.log("draw");
  }
};

circle.draw();
//function draw(){}
//function move(){}

// Camel Notation	: oneTwoThreeFour
// Pascal Notation 	: OneTwoThreeFour

/**
Factory Functions

*/

function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    }
  };
}
const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);
/**
Constructor Functions*/

function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
}

const circle3 = new Circle(1);
console.log(circle3);

/**
Dynamic Nature of Objects
*/
const circle4 = {
  raduis: 1
};

(circle4.color = "yellow"), (circle4.draw = function() {});
console.log(circle4);
/**
Note: const we not re assign, But change objects by adding or remvoing properties
*/

/**
Constructor Property
*/

/**
Functions are Objects
*/

/**
Value vs Reference Types
Primitives are copied by values, (Value Types are also called Primities - Number, String, Boolean, Symbol, undefined, null)
Objects are copied by their Reference. (Refenec Types - Objects, )
*/
//value
let number = 10;

function increment(number) {
  number++;
}
increment(number);
console.log(number);

// Reference
let obj = { value: 10 };
function increase(obj) {
  obj.value++;
}
increase(obj);
console.log(obj);

/**
Enumerating Properties of an Object
*/
const circle5 = {
  radius: 1,
  draw() {
    console.log("draw");
  }
};

for (let key in circle5) {
  console.log(key, circle[key]);
}

for (let key of Object.keys(circle5)) {
  console.log(key);
}
for (let key of Object.entries(circle5)) {
  console.log(key);
}
if ("radius" in circle5) console.log("yes");

/**
cloning an object
*/
// create another circle5 object
const another = {};
for (let key in circle5) {
  another[key] = circle[key];
}
console.log(another);

// Using Object.assign
const another2 = Object.assign({ time: "morning" }, circle5);
console.log(another2);

// ... spread Operator
const another3 = { ...circle };
console.log(another3);

/**
GarbageCollector  --It finds the variables or constants that are no longer used and then deallocate the memory that allocated them eailer.
*/

/**
Math
*/

/**
String
*/

/**
Template Literals

Refernece: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
*/
const message = "This is my\n 'first' Message";
console.log(message);

const name4 = "Kishore";
const another4 = `
Hi ${name4} 

Thanks for Joing 

Regads
Kishore

`;
console.log(another4);

/**
Date
*/

const now = new Date();
const date1 = new Date("may-11-2018 09:00");
const date2 = new Date(2018, 4, 11, 9);

console.log(date1);
now.setFullYear(2017);
console.log(now);

/**
Exercise 1

Street
city
zipCode
showAddress (address)

Exercise 2
Use Factory and Constractor

Exercise 3
Object equality
*/

let address = {
  street: "A",
  city: "B",
  zipCode: "C",
  showAddress: "D"
};

function showAddress(address) {
  for (let key in address) {
    console.log(key, address[key]);
  }
}
showAddress(address);

//Factory
function address1(street, city, zipCode, showAddress) {
  return {
    street,
    city,
    zipCode,
    showAddress
  };
}
let addressFactroy = address1("A", "B", "C", "D");
console.log(addressFactroy);
// constractor
function Address(street, city, zipCode, showAddress) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
  this.showAddress = showAddress;
}

let addressConstructor1 = new Address("A", "B", "C", "D");

console.log(addressConstructor1);

let addressConstructor2 = new Address("A", "B", "C", "D");

function isEqual(address1, address2) {
  return (
    address1.street === address.street &&
    address1.city === address2.city &&
    address1.zipCode === address2.zipCode &&
    address1.showAddress == address2.showAddress
  );
}
function areSame(address1, address2) {
  return address1 === address2;
}

console.log(isEqual(addressConstructor1, addressConstructor2));
console.log(areSame(addressConstructor1, addressConstructor2));

let addressConstructor3 = addressConstructor1;
console.log(areSame(addressConstructor1, addressConstructor3));

/**
 * Exerise 4 : Blog post Object
 *
 * title
 * body
 * author
 * views
 * comments
 * (author, body )
 * isLive
 * Exerise 5 -
 */
let post = {
  title: "a",
  body: "b",
  aithor: "c",
  views: 10,
  comments: [
    { author: "Kishore", body: "b" },
    { author: "Kishore", body: "b" }
  ],
  isLive: true
};

console.log(post);

// Exerise 5 : Blog post Object

function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = true;
}
let postConst = new Post("a", "b", "c");
console.log(postConst);

/**
 * Exerise 6
 * Price Range Objects
 *
 */

let priceRangers = [
  { label: "$", totaltip: "Indexpensive", minPerPerson: 0, maxPerPerson: 10 },
  { label: "$$", totaltip: "Moderate", minPerPerson: 11, maxPerPerson: 20 },
  { label: "$$$", totaltip: "Expensive", minPerPerson: 21, maxPerPerson: 30 }
];

let restarant = [{ averagePerPerson: 5 }];
