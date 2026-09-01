//Task 1 : create three variables. var,let,const

var studentName = "Siva";
let studentAge = 25;
const collegeName = "Siva Institute";

//Requirements:

console.log(studentName);
console.log(studentAge);
console.log(collegeName);

studentName = "Sai";
console.log(studentName);

studentAge = 16;
console.log(studentAge);

// collegeName = "Sv Junior";
// console.log(collegeName);

//Error : Assignment to constant variable.

var studentName = "Teja";
console.log(studentName);

// let studentAge = 22;
// console.log(studentAge);

// Error : Identifier 'studentAge' has already been declared.

//Task 2 : User Information. Info from the user using prompt(): and print result in the console.

// let name = prompt("Enter your Name :");
// console.log("Name: " + name);

// let age = prompt("Enter your Age :");
// console.log("Age: " + age);

// let city = prompt("Enter your city:");
// console.log("City: " + city);

//Task 3 : Welcome Message. Get user's name using prompt(). And display using alert().

// var userName = prompt("Enter your Name :");
// alert("Welcome " + userName + "!");

//Task 4 : Age Calculator

// let age = prompt("Enter your Birth Year :");
//     userAge = 2026 - age;
// console.log("Age: " + userAge);

//Task 5 : Identify Data Types. Create variables and print their data type using typeof.

var name = "Hello";
console.log(typeof(name));

var number = 100;
console.log(typeof(number));

var numb = 25.5;
console.log(typeof(numb));

var text = true;
console.log(typeof(text));

var txt = false;
console.log(typeof(txt));

var defined = undefined;
console.log(typeof(defined));

var last = null;
console.log(typeof(last));

//Task 6 : Student Data. Create an object and print.

let studentData = {
    Name : "Tej",
    Age : 31,
    City : "Kadapa",
    Qualification : "B.Tech",
    isStudent : true
}

console.log(studentData);
console.log(studentData.Name);
console.log(studentData.Age);
console.log(studentData.Qualification);
console.log(studentData.isStudent);

//Task 7 : Fruit Array. Create array containing 6 fruits and print.

var fruits = ["Apple", "Mango", "Orange", "Banana", "Grapes", "Papaya"]

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]);
console.log(fruits.length);

//Task 8 : Basic Calculator (Arithmetic Operator Tasks)

let a = 20;
let b = 5;

//Addition :
console.log(a + b);

//Subtraction :
console.log(a - b);

//Multiplication :
console.log(a * b);

//Division :
console.log(a / b);

//Modulus :
console.log(a % b);

//Exponential :
console.log(a ** b);

//Task 9 : Shopping Bill. Create and calculate total price.


const Shirt = 999;
const Pant = 1499;
const Shoes = 1999;

const Total = Shirt + Pant + Shoes;

console.log("Total = " + Total);

//Task 10 : Simple Marks Calculation. Create 3 subjects and calculate.

let Tamil = 80;
let English = 75;
let Maths = 90;

let total = Tamil + English + Maths;

console.log(total);       // Total marks

console.log(total/3);     // Average marks

//Increment & Decrement Task :

//Task 11 : Post Increment.

let A = 10;

let B = A++;

console.log(A);         // a = 11
console.log(B);         // b = 10

//Task 12 : Pre Increment.

let C = 10;

let D = ++C;

console.log(C);         // c = 11
console.log(D);         // d = 11

//Task 13 : Post Decrement.

let E = 20;

let F = E--;

console.log(E);         // e = 19
console.log(F);         // f = 20


//Task 14 : Pre Decrement.

let G = 20;

let H = --G;

console.log(G);         // g = 19
console.log(H);         // h = 19

//Task 15 : Find the final value.

let c = 5;

let d = c++;

let e = ++c;

let f = d--;

console.log(c);       // c = 7
console.log(d);       // d = 4
console.log(e);       // e = 6
console.log(f);       // f = 5

//Task 16 : Assignment Operators.

let num = 10;

//Addition :

num += 5;
console.log(num);

//Subtraction :

let num1 = 8;
num1 -= 5;
console.log(num1);

//Multiplication :

let num2 = 10;
num2 *= 5;
console.log(num2);

//Division :

let num3 = 10;
num3 /= 5;
console.log(num3);

//Module :

let num4 = 10;
num4 %= 5;
console.log(num4);

//Exponential :

let num5 = 10;
num5 **= 5;
console.log(num5);

//Task 17 : Mini Student Profile.

// Using variable

var studentName1 = "Ani";
let studentAge1 = 22;
let city = "Tirupathi";
const college = "Sv Institute of science and technology";

//Using Array

let subject = ["Maths", "English", "Hindi", "Social", "Science"]

//Using Object

let employee = {
    Name : "Prabha",
    Age : 23,
    City : "Tirupathi",
    Subjects : ["Maths", "English", "Telugu", "Social"],
    isStudent : false
}

console.log(studentName1);

console.log(studentAge1);

console.log(city);

console.log(subject[0]);

console.log(subject[subject.length - 1]);

console.log(subject.length);

console.log(employee);

//Final Challenge - User + Calculator

//let Num1 = Number(prompt("Enter your first number :"));
//let Num2 = Number(prompt("Enter your second number :"));

//Addition 

console.log(Num1 + Num2);

//Subtraction

console.log(Num1 - Num2);

//Multiplication

console.log(Num1 * Num2);

//Division 

console.log(Num1 / Num2);

//Module

console.log(Num1 % Num2);

//Power

console.log(Num1 ** Num2);