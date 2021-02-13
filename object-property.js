const student = [
    {id: 21, name: 'Robert Bruce'},
    {id: 31, name: 'Tony Blayer'},
    {id: 41, name: 'Scarlet Jayson'},
    {id: 71, name: 'Hue Hackman'}
];

const names = [];
for(let i = 0; i < student.length; i++){
    const nameOfStudent = student[i].name;
    names.push(nameOfStudent);
}
console.log(names);

const nameOfStudent = student.map(s => s.name);
const ids = student.map( s => s.id);
const greaterThan = student.filter(s => s.id > 40);
const greaterOne = student.find(s => s.id > 40);
console.log(nameOfStudent);
console.log(ids);
console.log(greaterThan);
console.log(greaterOne);