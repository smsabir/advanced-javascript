const person = {
    name : 'Mark Don',
    age: 25,
    district: 'Dhaka',
    salary : 25000
};

// converting a object to JSON
const data = JSON.stringify(person);
// console.log(data.name);  // can not get the value as it is JSON data.

// Convert JSON data to Object
const dataParsed = JSON.parse(data);
// console.log(dataParsed.name);

// Local Storage

//localStorage.setItem('userId', 1245);

const userId = localStorage.getItem('userId');
// console.log(userId);

localStorage.setItem('person', JSON.stringify(person));
const storedPerson = localStorage.getItem('person');
const parsedPerson = JSON.parse(storedPerson);
console.log(parsedPerson.age);

const keys = Object.keys(parsedPerson);
console.log(keys);

const values = Object.values(parsedPerson);
console.log(values);