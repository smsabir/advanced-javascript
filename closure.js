function stopWatch(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}
const clock1 = stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2 = stopWatch();
console.log(clock2());
console.log(clock2());

console.log(clock1());

// if there is function inside a function it create a closed environment and when we call it and if the insider function access the variable within the parent function it will keep separate track of each time it called.