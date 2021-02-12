// Difference is double equal == will not check the data type. 2 & '2' will be true.
// for tripe equal === will check data type 2 & '2', will be false.
const first = 2;
const second = "2";

if(first == second){
    console.log("Condition is true");
}
else{
    console.log("Condition is false");
}



// it will show false because == will try to make these data type same. like false = 0, true = 1;
const check = 1;
const check2 = false;
if(check == check){
    console.log("Condition is true");
}
else{
    console.log("Condition is false");
}

// will be False because === will check the data type & value.
const check = 0;
const check2 = false;
if(check === check){
    console.log("Condition is true");
}
else{
    console.log("Condition is false");
}