const numbers = [3, 4, 5, 6, 7, 8];
const output = [];

for(let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}

function square(element){
    return element * element;
}

 // We can pass an array to map and get elements, index of that array as well as the whole array
const result  = numbers.map(function(element){
    return element * element;
});

 // Arrow function
 const result2 = numbers.map(x => x * x); // x is element here.

console.log(result2);

// filter return an array where find return element.
const greater = numbers.filter(x => x > 5);
const isThere = numbers.find( x => x > 5);
console.log(isThere);