/**
 *Arrays - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 */
const numbers = [2, 3];

/**
 * Adding Elements
 */
// End
numbers.push(5, 6);

numbers.unshift(1, 4);

numbers.splice(2, 0, "a", "b");
console.log(numbers);

/**
 * Finding an element
 */
let index3 = numbers.indexOf(4);
console.log(index3);
let lastIndex = numbers.lastIndexOf(2);
console.log("last Index", lastIndex);

/**
 * Finding Elements (Reference Types)
 */
const courses = [
  { id: 1, name: "A" },
  { id: 2, name: "B" }
];

const course = courses.find(function(course) {
  return course.name === "A"; // Undefind if not find
});

//courses.includes()
console.log(courses);
console.log(course);

const courseByIndex = courses.findIndex(function(course) {
  return course.name === "B";
});

console.log("FindBy Index ", courseByIndex);

/**
 * Arrow Functions
 * In ES6 - arow function to shortly
 */
const courseA = courses.find(course => course.name === "A");

console.log("Arrow Function for course A ", courseA);

/**
 * Remvoing elements
 */

const numbers1 = [1, 2, 3, 4, 5];

//  End
const lastNum = numbers1.pop();
console.log("lastNum ", lastNum);

// Begining
const shift = numbers.shift();
console.log("shift ", shift);

//Middle
const splice = numbers.splice(2, 2); // From index2 remove 2 elements
console.log("splice", splice);

/**
 * Removing an Array
 */

let number2 = [1, 2, 3, 4, 5];
let another = number2;
//Sou - 1 - Simple Soulction if have single reference
//number2 = [];

//Sou - 2 - Simple one
//number2.length = 0;

//Sou - 3
//number2.splice(0, number2.length);

// Sou -4 - Performace Cost
while (number2.length > 0) {
  number2.pop();
}

console.log("number2 is ", number2);
console.log("another is ", another);

/**
 * Combing and slicing Arrays
 *
 * Spread opertor - For achiving combining two arrays
 */
const first = [1, 2, 3, 4, 5];
const second = [6, 7, 8, 9, 10];

const combin = first.concat(second);
const slice = combin.slice();

console.log(combin);
console.log(slice);

// Spread opertor - For achiving combining two arrays

const spred = [...first, ...second];
let spredFlex = [...first, "a", ...second];

console.log(spred);
console.log(spredFlex);

/**
 * Iterating an Array
 * - For of
 * - Foreach - callbackfunction - using function and Arraow function
 */
const numbers5 = [1, 2, 3, 4, 5];
for (let number of numbers5) {
  console.log(number);
}

numbers5.forEach(function(number) {
  console.log(number);
});

// using arrow function
numbers5.forEach((n, i) => console.log(n, i));
/**
 * Joining Arrays
 */
const joined = numbers5.join(",");
console.log(joined);

const message = "This is a grate for learning JavaScript";
const msgSplit = message.split(" ");
console.log(joined);

const msgJoin = msgSplit.join("-");
console.log(msgJoin);

const msgJoin1 = message.split(" ").join("-");
console.log(msgJoin1);

/**
 * Sorting array
 */
const numbers6 = [1, 6, 2, 9, 4];
const sortNum6 = numbers6.sort();
console.log(sortNum6);

//Using Objects
const courses1 = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "JavaScript" }
];

const course1 = courses1.sort(function(a, b) {
  nameA = a.name.toUpperCase;
  nameB = b.name.toUpperCase;

  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return -1;
  }
  return 0;
});

console.log(course1);
/**
 * Test elements in an array
 * - every() -
 * - some()
 */
const numbers3 = [1, -1, 2, 3];
const allPositive = numbers3.every(function(n) {
  return n > 0;
});

console.log(allPositive);
/**
 * Filtering an Array
 */
const numbers4 = [1, -1, 2, 3];
const filtered = numbers4.filter(function(value) {
  return value >= 0;
});
console.log(filtered);

const filtered1 = numbers4.filter(value => value >= 0);
console.log(filtered1);
/**
 * Mapping an Array
 */
const numbers7 = [1, -1, 3, 5, 4];
const num7Filt = numbers7.filter(v => v >= 0);
const num7Items = num7Filt.map(n => "<li>" + n + "</li>"); //.join(",");

const html = "<ul>" + num7Items.join(" ") + "</ul>";
console.log(html);
const num7Items1 = num7Filt.map(n => {
  return { value: n };
});

console.log(num7Items1);
// const num7Items2 = num7Filt.map(n => {  value: n;}); // Returning object like {} is undefined

const num7Items2 = num7Filt.map(n => ({ value: n })); // Returning object like {} is undefined
console.log(num7Items2);

//chaning
console.log(
  numbers7
    .filter(v => v >= 0)
    .sort()
    .map(n => ({ value: n }))
    .filter(obj => obj.value > 1)
);
/**
 * Reducing an array
 */
const numbers8 = [1, 2, 3, 4];
let sum = 0;
for (let n of numbers8) {
  sum += n;
}
console.log(sum);
let sum1 = numbers8.reduce((accumlator, currentValue) => {
  return accumlator + currentValue;
});
console.log(sum1);

let sum2 = numbers8.reduce(
  (accumlator, currentValue) => accumlator + currentValue
);

console.log(sum2);
/**
 * Exercise 1 : Array from range
 */

const numbersE1 = arrayFromRange(-10, -1);
console.log(numbersE1);
function arrayFromRange(min, max) {
  const output = [];
  for (let i = min; i < max; i++) {
    output.push(i);
  }
  return output;
}

/**
 * Exercise 2 : Includes
 */

const numbersE2 = [1, 2, 3, 4];

console.log(includes(numbersE2, 4));
function includes(array, searchElement) {
  for (let element of array) {
    if (element === searchElement) return true;
  }
  return false;
}

/**
 * Exercise 3 : Except
 */

const numberE3 = [1, 4, 5, 3, 2];
console.log(except(numberE3, [1, 5]));
function except(array, excluded) {
  const output = [];
  for (let element of array) {
    if (!excluded.includes(element)) {
      output.push(element);
    }
  }
  return output;
}

/**
 * Exercise 4 : Moving an element
 */
function move(array, index, offset) {}

/**
 * Exercise 5 : Count of occurence
 */
const numbersE5 = [1, 2, 3, 4, 5, 1];

console.log(countOfOccurence(numbersE5, 1));
function countOfOccurence(array, searchElement) {
  //let count = 0;
  //for (let element of numberE5) {
  // if (element === searchElement) {
  //    count++;
  //  }
  //}
  //return count;
  return array.reduce((accumlator, current) => {
    const occurence = current === searchElement ? 1 : 0;
    //    console.log(accumlator, current, searchElement);
    return accumlator + occurence;
  });
}

/**
 * Exercise 6 : Get Max
 */
const numbersE6 = [1, 6, 3, 4, 5, 7, 8];
console.log(getMax(numbersE6));

function getMax(array) {
  if (array.length === 0) {
    return undefined;
  }
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

console.log(getMaxUsingReduce([5, 7, 23, 27, 19, 20]));
/** function getMaxUsingReduce(array) {
  return array.reduce((accumlator, current) => {
    return current > accumlator ? current : accumlator;
  });
}*/
function getMaxUsingReduce(array) {
  if (array.length === 0) return undefined;

  // a - accumlator b - current
  return array.reduce((a, b) => (a > b ? a : b));
}
/**
 * Exercise 7 : Movies
 */
const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2017, rating: 3 },
  { title: "D", year: 2018, rating: 4.5 }
];

// All movies in 2018 with rating >4
// sort them by rating
// Descending order
// Pick their
const title = movies
  .filter(m => m.year === 2018 && m.rating >= 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map(m => m.title);
console.log(title);
