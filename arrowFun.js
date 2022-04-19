//Arrow functions were introduced in ES6.
hello = function(ok){
    return "Hello  World! " + ok;
}
//with arrow function
hello = () =>{
    return "Hello 2 World!";
}
//we can also write the function as  
//if we want to pass the value we can pass through the parenthesis and in single line function we can remove that parenthesis
hello = val => "Hello " + val;

let a = hello("there");
console.log(a);
/*
What About this?
The handling of this is also different in arrow functions compared to regular functions.

In short, with arrow functions there are no binding of this.

In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever.

With arrow functions the this keyword always represents the object that defined the arrow function.

Let us take a look at two examples to understand the difference.

Both examples call a method twice, first when the page loads, and once again when the user clicks a button.

The first example uses a regular function, and the second example uses an arrow function.

The result shows that the first example returns two different objects (window and button), and the second example returns the window object twice, because the window object is the "owner" of the function.
*/
