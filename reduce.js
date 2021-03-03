const friends = [
    {name: "Mark", money: 12},
    {name: "John", money: 25},
    {name: "David", money: 37},
    {name: "Rossi", money: 29},
    {name: "Pogba", money: 100}
];

// const total = friends.reduce( (sum, friends) => {
//     console.log(sum, friends);
//     return sum + friends.money;
// }, 
// 0);

const total = friends.reduce((sum, friends) => sum + friends.money , 0);

console.log(total);