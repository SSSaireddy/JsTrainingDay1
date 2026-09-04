// //Task 1 : Variable. Create variable using var, let and const.


// var Name = "Siva";
// let Age = 25;
// let City = "Kadapa";
// const College = "Narayanadri Institute";


// //Requirements :


// console.log(Name);
// console.log(Age);
// console.log(City);
// console.log(College);

// Name = "Sai"              // Change the Var value
// console.log(Name);

// Age = 26;                     // Change the Let value
// console.log(Age);

// // College = "SVPP";          // Change the Const value
// // console.log(College);

// //Error : Assignment to constant variable.


// var Name = "Teja";            // Redeclaring the Var variable
// console.log(Name);


// // let Age = 32;              // Redeclaring the Let variable
// // console.log(Age);

// //Error : Uncaught SyntaxError : Identifier 'Age' has already been declared.


// // const College = "NIST";    // Redeclaring the Const variable
// // console.log(College);

// //Error : Uncaught SyntaxError : Identifier 'College' has already been declared.



// //Task 2 : Printing Statements.

// let name = "Divya";
// console.log(name);

// var ask = alert("Welcome Divya!");
// console.log(ask);

// let login = confirm(" Do you want to login your account");
// console.log(login);

// var password1 = prompt("Enter your Email Id for login");
// console.log(password1);

// let final = "Congratulation! you are successfully logged into your account";
// document.writeln(final);



//Task 3 : User details. Get from the User.

// let userName = prompt("Enter your Name :");
// let userAge = prompt("Enter your Age :");
// let userCity = prompt("Enter your City :");
// let userQualification = prompt("Enter your Qualification :");

// console.log("Name : " + userName);
// console.log("Age : " + userAge);
// console.log("City : " + userCity);
// console.log("Qualification : " + userQualification);



//Task 4 : Data Type Tasks - Find Data Type

var name1 = "JavaScript";
let num = 100;
let num2 = 99.5;
var boo = true;
var boo1 = false;
let text = undefined;
let text2 = null;

console.log(name1);
console.log(num);
console.log(num2);
console.log(boo);
console.log(boo1);
console.log(text);
console.log(text2);

console.log(typeof(name1));
console.log(typeof(num));
console.log(typeof(num2));
console.log(typeof(boo));
console.log(typeof(boo1));
console.log(typeof(text));
console.log(typeof(text2));



//Task 5 : Student Array

let students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];

console.log(students[0]);
console.log(students[1]);
console.log(students[students.length - 1]);
console.log(students.length);



//Task 6 : Employee object

let employee = {
    Name : "Ani",
    Age : 23,
    Role : "Frontend Developer",
    Skills : ["HTML", "CSS", "JS", "Node.js"],
    isWorking : true,
    Qualification : ["10th", "Diploma", "B.Tech"]
}

console.log(employee.Name);
console.log(employee.Age);
console.log(employee.Role);
console.log(employee.Skills[0]);
console.log(employee.Qualification[employee.Qualification.length - 1]);
console.log(employee.isWorking);



//Task 7 : Calculator (Arithmetic Operator Tasks)

let a = 20;
let b = 5;

//Adition
console.log(a + b);

//Subtraction
console.log(a - b);

//Multiplication
console.log(a * b);

//Division
console.log(a / b);

//Module 
console.log(a % b);

//Exponential
console.log(a ** b);



//Task 8 : Shopping Bill

let Shirt = 999;
let Pant = 1499;
let Shoes = 1999;
let Bag = 799;

let totalPrice = Shirt + Pant + Shoes + Bag;

console.log(totalPrice);



//Task 9 : Increment & Decrement

//A

let A = 10;
let B = A++;

console.log(A);                 // A = 11
console.log(B);                 // B = 10

//B

let C = 10;
let D = ++C;

console.log(C);                 // C = 11
console.log(D);                 // D = 11

//C

let E = 10;
let F = E--;

console.log(E);                 // E = 9
console.log(F);                 // F = 10

//D

let G = 10;
let H = --G;

console.log(G);                 // G = 9
console.log(H);                 // H = 9



//Task 10 : Assignment Operator Tasks

//Addition

let Num = 10;
    Num += 5;
console.log(Num);

//Subtraction

let Num1 = 10;
    Num1 -= 3;
console.log(Num1);

//Multiplication

let Num2 = 10;
    Num2 *= 2;
console.log(Num2);

//Division

let Num3 = 10;
    Num3 /= 4;
console.log(Num3);

//Module

let Num4 = 10;
    Num4 %= 3;
console.log(Num4);

//Exponential

let Num5 = 10;
    Num5 **= 2;
console.log(Num5);



//Task 11 : Comparision Operator Tasks           Prediction

console.log(10 > 5);                             // True
console.log(10 < 5);                             // False
console.log(10 >= 10);                           // True
console.log(10 <= 9);                            // False

console.log(5 == "5");                           // True
console.log(5 === "5");                          // False

console.log(10 != "10");                         // False
console.log(10 !== "10");                        // True



//Task 12 : Logical Operator Tasks (AND)

console.log(true && true);                       // True
console.log(true && false);                      // False
console.log(false && true);                      // False
console.log(false && false);                     // False



//Task 13 : OR

console.log(true || true);                       // True
console.log(true || false);                      // True
console.log(false || true);                      // True
console.log(false || false);                     // False



//Task 14 : NOT

console.log(!true);                              // False
console.log(!false);                             // True
console.log(!(5 > 10));                          // True
console.log(!(10 > 5));                          // False



//Task 15 : Combination

console.log(5 == "5" && !(5 === 5) || 6 > 7);

        //  true && false || false
        //   false || false
        //    false

console.log(10 > 5 && 8 < 12 || 4 === "4");

        // true && true || false
        //  true || false
        //    true

console.log(7 === 7 && 10 != "10" || 5 >= 5);

        // true && false || true
        //  false || true
        //    true

console.log(15 < 10 || 20 > 15 && 5 == "5");

        // false || true && true
        //  true && true
        //    true



//Task 16 : Ternary Operator Tasks (Voting)

let age = 20;

let status = age >= 18 ? "Eligible to vote" : "Not eligible";

console.log(status);



//Task 17 : Password

let password = true;

let pwd = password ? "Login successful" : "Wrong password";

console.log(pwd);



//Task 18 : Concatenation & Template String (User Introduction)

let concatName = "Naveen";
let age1 = 25;
let city = "Trichy";

// + method

console.log("My name is " + concatName + ". I am " + age1 + " years old. I live in " + city + ".");

// template literals

console.log(`My name is ${concatName}. I am ${age1} years old. I live in ${city}.`);



//Type casting tasks :

//Task 19 : String Convertion - Using string to convert :

var v = String(100);
var w = String(true);
var x = String(undefined);
var y = String(null);
var z = String([1,2]);

console.log(v);
console.log(w);
console.log(x);
console.log(y);
console.log(z);

console.log(typeof(v));
console.log(typeof(w));
console.log(typeof(x));
console.log(typeof(y));
console.log(typeof(z));



//Task 20 : Number Conversion

console.log(Number());
console.log(Number(""));
console.log(Number("123"));
console.log(Number("a1"));
console.log(Number(true));
console.log(Number(false));
console.log(Number(undefined));
console.log(Number(null));



//Task 21 : Boolean Conversion

console.log(Boolean());
console.log(Boolean(""));
console.log(Boolean("Hello"));
console.log(Boolean(123));
console.log(Boolean(true));
console.log(Boolean(false));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean([]));
console.log(Boolean({}));



//Task 22 : Flow Control Tasks - Voting Eligibility

let userAge1 = prompt("Enter your Age : ");

if (userAge1 >= 18){
    console.log("You can vote");
}
else{
    console.log("you can't vote");
}



//Task 23 : Positive or Negative

let number = prompt("Enter one Number : ");

if (number > 0){
    console.log("Number is Positive");
}
else if (number < 0){
    console.log("Number is Negative");
}
else{
    console.log("Number is Zero");
}



//Task 24 : Grade System

let marks = prompt("Enter your marks : ");

if (marks < 100 && marks > 90){
    console.log("A Grade");
}
else if (marks < 89 && marks > 80){
    console.log("B Grade");
}
else if (marks < 79 && marks > 70){
    console.log("C Grade");
}
else if (marks < 69 && marks > 60){
    console.log("D Grade");
}
else{
    console.log("Fail");
}



//Task 25 : Nested If Task - Job Eligibility

let age2 = prompt("Enter your Age : ");
let height = prompt("Enter your Height in cm : ");
let weight = prompt("Enter your Weight in kg : ");

if (age2 >= 18){

    if (height >= 160){

        if (weight >= 60){

            alert("Congratulations! You are selected");
        }
        else{
            alert("Your Weight is not enough");
        }
    }
    else{
        alert("Your Height is not enough");
    }
}
else{
    alert("Your Age is not enough");
}



//Task 26 : Switch Tasks (Traffic Light)

let color =  prompt("Enter the Traffic light color in lowercase letters: ");

switch(color){
    case "red" : console.log("Stop"); break;
    case "yellow" : console.log("Ready"); break;
    case "green" : console.log("Go"); break;

    default: console.log("Incorrect input"); break;
}



//Task 27 : Day

let day = 1;

switch(day){
    case 1 : console.log("Monday"); break;
    case 2 : console.log("Tuesday"); break;
    case 3 : console.log("Wednesday"); break;
    case 4 : console.log("Thursday"); break;
    case 5 : console.log("Friday"); break;
    case 6 : console.log("Saturday"); break;
    case 7 : console.log("Sunday"); break;

    default: console.log("Invalid day"); break;
}



//Final Mini Project :

//Task 28 : Student Result System

//Step 1 : User details

let studentName = prompt("Enter your name : ");
let studentAge = prompt("Enter your Age : ");
let studentCity = prompt("Enter your City : ");

//Step 2 : Get marks

let marks1 = Number(prompt("Enter your Tamil subject marks :"));
let marks2 = Number(prompt("Enter your English subject marks :"));
let marks3 = Number(prompt("Enter your Maths subject marks :"));

//Step 3 : Calculate

let totalMarks = marks1 + marks2 + marks3;

let average = totalMarks/3;

//Step 4 : Check result

let studentGrade;
if (average <= 100 && average >= 90){
    studentGrade = "A";
}
else if (average <= 89 && average >= 80){
    studentGrade = "B";
}
else if (average <= 79 && average >= 70){
    studentGrade = "C";
}
else if (average <= 69 && average >= 60){
   studentGrade = "D";
}
else{
    console.log("Fail");
}

//Step 5 : Check voting

let vote = studentAge >= 18 ? "Eligible" : "Not eligible";

//Step 6 : Display

let output =`
    Name: ${studentName}
    Age : ${studentAge}
    City : ${studentCity}
    Total : ${totalMarks}
    Average : ${average}
    Grade : ${studentGrade}
    Voting : ${vote}`;

console.log(output);
alert(output);