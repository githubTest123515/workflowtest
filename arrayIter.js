// forEach() method  method calls a function (a callback function) once for each array element.
const no =[1,2,3,4,6,5,9,8,7];
let txt = "";
no.forEach(myFunction);

function myFunction(value, index,array){
    txt += value;

}
console.log(txt);

//map() method creates a new array by performing a function on each array element.

const number = no.map(myFunction1);
function myFunction1(value,index,array){
    return value * 3;
}
console.log(number);

//filter() method creates a new array with array elements that passes a test.
const over18 = no.filter(myFunction2);
function myFunction2(value,index,array){
    return value > 5;
}
console.log(over18);

// The reduce() method runs a function on each array element to produce (reduce it to) a single value.
// The reduce() method works from left-to-right in the array.

let sum = no.reduce(myFunction3);
let sum1 = no.reduce(myFunction3,100);
function myFunction3(total,value,index,array){
    return total + value;
}
console.log(sum + " The output at line 34");
console.log(sum1 + " The output at line 35");
 
//The every() method check if all array values pass a test.
let allover = no.every(myFunction4);
function myFunction4(value,index,array){
    return value < 5;

}
console.log(allover);