//Q1: Difference between var, let and const.

// var:-
//       A var variable can be reassigned after declaration.
//       A var variable can also be redeclared in the same scope.
//       Initialization is not mandatory at the time of declaration.
//       var is function-scoped, not block-scoped.

// let:-
//       A let variable can be reassigned.
//       A let variable cannot be redeclared in the same scope.
//       Initialization is not mandatory at the time of declaration.
//       let is block-scoped, which means it is limited to the block { } where it is declared.

// const:- 
//         A const variable cannot be reassigned.
//         A const variable cannot be redeclared in the same scope.
//         Initialization is mandatory when declaring a const variable.
//         const is also block-scoped.
//         const is used when a variable should not be reassigned after its initial value is assigned.



//Q2: Can you re-declare a variable with var? What about let and const? 

// Var : We can re-declare the same variable multiple times within the same scope without triggering an error.

// let and const : No. We cannot re-declare a variable with let or const within the same scope. When we attempt to re-declare it, JavaScript throws an error.
//                 SyntaxError : Identifier 'name' has already been declared.



//Q3 : What will be output.

var x = 5;
let y = 10;
const z = 15;

x = 20;
y = 25;
// z = 30;

console.log(x, y, z);

// Output : x = 20, 
//          y = 25, 
//          z = Error : Assignment to constant variable.


//Q4 : Difference between declaring and initializing a variable.

// Declaring : It means creating a variable by specifying its name, without assigning a value to it.
//             Ex : let age;

// Initializing : It means assigning a value to a variable when it is declared.
//                Ex : age = 10;


//Q5 : What will be output.

let a;

console.log(a);

// Output : Undefined


//Q6 : What is hoisting? Give an example.

// Hoisting : Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their scope before the code is executed.

// Example : 

console.log(b);

var b = 10;

// Output : Undefined



//Q7 : Difference between Null and Undefined.

// Null : null means we intentionally assign an empty or no value to a variable.
//        Ex : let a = null;
//             console.log(a); // null

// Undefined : undefined means a variable has been declared but no value has been assigned.
//             Ex : let a;
//                  console.log(a) // undefined


//Q8 : What will be the output?
// ```javascript
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof []);
// console.log(typeof {});
// ```

// Output : Object
//          undefined
//          Object
//          Object


//Q9 : Difference between == and ===.

// == : compares two values after performing type conversion if necessary.

// === :compares both the value and the data type without type conversion.



//Q10 : Difference between ++i and i++.

// ++i : First increases the value, then uses the updated value.

// i++ : First uses the current value, then increases the value.



//Q11: What will be the output?
let X = 10;
let Y = "5";
console.log(X + Y);
console.log(x - Y);
console.log(x * Y);
console.log(x / Y);

// Output : 105
//          5
//          50
//          2



//Q12 : What are logical operator and Examples

// AND (&&) : The AND operator returns true only when both conditions are true. If either condition is false, it returns false.

// Example :

let age = 25;

console.log(age >= 18 && age <= 60);


// OR (||) : The OR operator returns true if at least one of the conditions is true. It returns false only when both conditions are false.

// Example :

let age1 = 26;

console.log(age1 >= 18 && age1 <= 54);


// NOT (!) : The NOT operator reverses the Boolean value of a condition. If the condition is true, it returns false, and vice versa.

// Example :

let isStudent = true;

console.log(!isStudent); // false


//Q13: What will be the output?
console.log(5 > 3 && 10 > 5);
console.log(5 > 10 || 10 > 5);
console.log(!(5 > 3));

// Output : true
//          true
//          false



//Q14 : What is ternary operator and Example

// Ternary operator : If condition is true, first statement selected. Otherwise second statement is selected.

// Syntax : condition ? statement1 : statement2;

// Example :

let A = 22;

console.log(A >= 18 ? "Eligible to vote" : "Not Eligible");



//Q15 : Difference between Implicit typecasting and Explicit typecasting.

// Implicit typecasting : It automatically converts one data type to another. No need to do manually.

// Explicit typecasting : We need to manually convert one data type to another by using functions like String(), Number() or Boolean().


//Q16 : What will be output.

console.log(Number("123"));
console.log(Number("Hello"));
console.log(Number(true));
console.log(Number(false));
console.log(Boolean(0));
console.log(Boolean("hello"));

// Output : 123
//          NaN
//          1
//          0
//          false
//          true


//Q17 : NaN means and Example

// NaN (Not a Number) : NaN stands for Not a Number. It is returned when JavaScript tries to perform a numeric conversion or calculation, but the result is not a valid number.

//Example : 

let x1 = Number("hello");

console.log(x);


//Q18 : Difference between if-else and switch.

// if-else : Used to check different conditions, including complex conditions using operators like >, <, &&, ||, etc.

// switch : Used to compare one expression with multiple fixed values using case.


//Q19 : What will be output.

let Age = 20;

if (Age >= 18){

    console.log("Adult");
}
else {

    console.log("Minor");
}

// Output : Adult


//Q20 : What is nested if? Give an example.

//A nested if is an if statement placed inside another if statement. It is used when we need to check one condition only after another condition is satisfied.

let Age1 = 20;
let hasID = true;

if (Age1 >= 18) {
    if (hasID) {
        console.log("You can enter");
    }
}

// You can enter


// Q21: Write a program to check if a number is even or odd using ternary operator.

let number = 11;

let result = number % 2 === 0 ? "Even" : "Odd";

console.log(result);


// Q22: What is the difference between while and do-while?

// while loop : The condition is checked before executing the loop. If the condition is false initially, the loop will not execute even once.
// do-while loop : The loop executes at least once because the condition is checked after executing the loop.


// Q23: What will be the output?
for(let i = 1; i <= 5; i++) {
    console.log(i);
}

// output :
1
2
3
4
5


// Q24: What is the difference between for-of and for-in?

// for-of : Used to iterate over the values of an iterable, such as an array or string.
// for-in : Used to iterate over the keys/properties of an object.


// Q25: Write a program to find sum of numbers from 1 to 100.

let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}

console.log(sum);

// Output :

5050


//Q26: What is the difference between slice and splice?

// Slice  : Extracts a portion of an array and returns a new array. It does not modify the original array.
// Splice : Can add, remove, or replace elements in an array. It modifies the original array.


// Q27: What will be the output?

let arr = [1, 2, 3];
arr.push(4);
arr.pop();
arr.unshift(0);
arr.shift();
console.log(arr);

// Output :
[1, 2, 3]


// Q28: What is the difference between function declaration and function expression?

// Function Declaration :
//                      A function is defined using the function keyword with a function name.
//                      It is fully hoisted, so it can be called before its declaration.

// Function Expression :

//                      A function is created and assigned to a variable.
//                      It is not available before the variable is initialized.
//                      It can be anonymous or named.


// Q29: What is an arrow function? Give an example.

//An arrow function is a shorter and more concise way to write a function in JavaScript.
// It was introduced in ES6 (ECMAScript 2015).
// It uses the arrow (=>) syntax instead of the function keyword.
// Arrow functions are commonly used for short functions and callbacks.

// Example : 

const add = (a, b) => {
    return a + b;
};

console.log(add(10, 20));

// output : 30


// Q30: What will be the output?

function greet() {
    return "Hello";
}
let message = greet();
console.log(message);

// Output : Hello

