
const money = 170;
const active = false;

let food = money > 100? 'Stake' : 'burger';
console.log(food);

const cssClass = active? 'active' : 'inactive';
console.log(cssClass);

// const callFunction = active? displayUser() : hideUsers();

// //if we have only one function to call.
// const callFunction2 = active && displayUser();  // only execute the function if active is true.

// variable with default value/parameter
let userInput =  10;

const x = userInput && 5; // if true/value  then return 5;
const y = userInput || 5; // if true/value then return true/value else 5.
console.log(x, y);


// string to number
const number = +'45';

// number to string
const string = '' + 45;

console.log(number, string);