const arr = ["mango", "banana", "orange", "apple", "grapes"];
let arrLen = arr.length;
console.log(arrLen);
let firstEle = arr[0];
// console.log(firstEle);
// console.log(arr[0]);
for (let i =0;i<arrLen;i++){
    console.log(arr[i]);
    
}
console.log(arr);

// In JavaScript, arrays use numbered indexes.  
// In JavaScript, objects use named indexes.
let a =  arr.sort();
console.log(a);
const arrNum = [45,50,1,25,35,33,12,4];
console.log(arrNum)
let b = arrNum.sort(function(a,b){return a-b});//sort the array of numbers
console.log(b)
let k = Math.max.apply(null,arrNum); // use Math.min.apply for minimum value.
console.log(k);


// FUNCTION TO FIND MAXIMUM VALUE IN ARRAY

function maxValue(arr1){
    let len  = arr1.length;
    let max = -Infinity;
    while(len--){
        if(arr1[len]>max){
            max = arr1[len];
        }
    }
    return max;
}
const q = [45,12,1,56,90];
let max = maxValue(q);
console.log("the maximum value in array using function is " + max + "\n");


// The map() method creates a new array by performing a function on each array element.
// The map() method does not execute the function for array elements without values.
// The map() method does not change the original array.

const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction1);

function myFunction1(value, index, array) {
  return value * 2;
}
console.log(numbers2 +"output of line no 52" + "\n")



// filter() method creates a new array which passes the condition

const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(over18)