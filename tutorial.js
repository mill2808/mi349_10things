alert('Hello'); alert('World');

alert('Hello');
alert('World');

"use strict";

let message1;
message1 = 'Hello';

alert(message);

let userFirstName = 'John';
let age = 25;
let message = 'Hello';

const myBirthday = '1.02/1990';

alert( 1 / 0 ) ; // infinity
alert( Infinity ); //Infinity
alert( "not a number" / 2 ); // NaN, such division is erroneous

alert( NaN + 1 ); // any further math on NaN returns NaN 
alert( 3 * NaN ); // NaN
alert( "not a number" / 2 - 1 ); // NaN

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;


let str = "Hello"; // Strings 
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

let name = "John";

// embed a variable
alert( `Hello, ${name}!` ); // Hello, John!

// embed an expression using backticks
alert( `the result is ${1 + 2}` ); // the result is 3

let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

let isGreater = 4 > 1;

alert( isGreater ); // true (the comparison result is "yes")

let ages = null;

let age1;

alert(age1); // shows "undefined"

let age2 = 100;

// change the value to undefined
age2 = undefined;

alert(age2); // "undefined"

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)


let name3 = "Ilya";

alert( `hello ${1}` ); // hello 1

alert( `hello ${"name"}` ); // hello name

alert( `hello ${name3}` ); // hello Ilya






