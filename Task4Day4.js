//Task 1 : For loop (1 to 10)

for (let a = 1; a <= 10; a++){

    console.log(a);
}

//Task 2 : Reverse For loop number (10 to 1)

for (let b = 10; b >= 1; b--){

    console.log(b);
}

//Task 3 : Even Numbers

for (let c = 0; c <= 20; c += 2){

    console.log(c);
}

//Task 4 : Odd Numbers

for (let d = 1; d <= 20; d += 2){

    console.log(d);
}

//Task 5 : Multiplication Table

 let aa = Number(prompt("Enter a number for multiplication table"));

 for (let b = 1; b <= 10; b++){

     result = aa * b;

     console.log(`${aa} * ${b} = ${result}`);
 }

//Task 6 : While Loop (Countdown)

let b = 10;

while(b >= 1){

    console.log(b);

    b--
}

//Task 7 : Sum of Numbers

let a = 1;
let count = 0;

while(a <= 10){

    count = count + a;

    a++
}

console.log(count);

//Task 8 : Do While Loops (Print Numbers)

let c = 1;

do{
    console.log(c);

    c++
}
while(c <= 5)

//Task 9 : Do while understanding

let d = 10;                // d variable stores the value 10

do{                        // next do block allows to check inside
    console.log(d);        // console prints the d value 10 which is variable stored value in first line
    d++                    // d++ increments the 10 + 1 = 11
}
while(d <= 5);             // while checks the condition 11 <= 5 which condition false and exit the loop.

//Explanation : Execute first, check later : A do... while loop always executes the code inside the do block at least once before checking the condition is true or not. It will helps to developer to identify the bug.

//Task 10 : For..of (String Characters)

let name = "Javascript";

for (i of name){

    console.log(i);
}

//Task 11 : Array Values

let fruits = ["Apple", "Orange", "Banana", "Mango", "Grapes"];

for (i of fruits){

    console.log(i);
}

//Task 12 : Student Names

let Names = ["Arun", "Priya", "Siva", "Sai", "Teja"];

for (i of Names){

    console.log("Student : " + i);
}

//Task 13 : Employee Object

let employee = {
    name : "Arun",
    age : 25,
    role : "Developer",
    city : "Chennai"
};

for (i in employee){

    console.log(i, employee[i]);
}

//Task 14 : Product Object

let product = {
    productName : "Power Bank",
    Price : 999,
    brand : "Boat",
    category : "Electronic",
    stock : "Yes"
};

for (i in product){

    console.log(i, product[i]);
}

//Task 15 : Function (Simple Function)

function Welcome(){

    console.log("Wlecome to JavaScript");
}
Welcome();
Welcome();
Welcome();

//Task 16 : Function with Parameter

function greet(name){

    console.log("Hello " + name);
}
greet("Naveen");
greet("Arun");
greet("Priya");

//Task 17 : Multiple Parameters

function student(name, age, department){

    console.log("Name :" + name);
    console.log("Age :" + age);
    console.log("Department :" + department);
}
student("Siva1", 25, "Mech");
student("Sai1", 26, "EEE");
student("Teja1", 32, "ECE");

//Task 18 : Return - Addition Function

function add(a, b){

    return a + b;
}

let results = add(10, 20);

console.log(results);

//Task 19 : Salary

function salaryPay(amount){

    return amount;
}

let salarymonthly = salaryPay(45000);

console.log(salarymonthly);

//Task 20 : Bonus Calculator

function bonus(salary, bonusAmount){

    return salary + bonusAmount;
}

let amount = bonus(50000, 5000);

console.log(amount);

//Task 21 : Default parameter

function employee1(name, role = "Developer"){

    console.log("Name : " + name);
    console.log("Role : " + role);
}

employee1("Arun");
employee1("Priya", "Designer");

//Task 22 : Function Types (Named Function)

function square(number){

    return number * number;
}
let num1 = square(1);
console.log(num1);

let num2= square(2);
console.log(num2);

let num3 = square(3);
console.log(num3);

let num4 = square(4);
console.log(num4);

let num5 = square(5);
console.log(num5);

//Task 23 : Anonymous Function

let calculate = function(a, b){

    return a + b;
};
console.log(calculate(3, 6));

//Task 24 : Arrow Function

let multiply = (a, b)=>{

    return a * b;
};
console.log(multiply(1, 3));

//Task 25 : Scope 

function test() {

    if (true){

        var A = 10;
        let B = 20;
        const C = 30;

        console.log(A);
        console.log(B);
        console.log(C);
    }

    console.log(A);
    //console.log(B);
    //console.log(C);
}

test();

//Task 26 : Hoisting

console.log(D);

var D = 10;

//Happen : Output prints 'undefined'


//Task 27 : 

// console.log(E);

// let E = 20;

//Happens : Output shows 'ReferenceError : cannot access E before initialization'


//Task 28 : 

// console.log(F);

// const F = 30;

//Happens : Output shows 'ReferenceError : cannot access F before initialization'

//Differences :

//var D : Var variable is global scope, allows both value reassignment and redeclaration, and hoists with a default value of undefined.

//let E : Let variable is block scoped, allows value reassignment but no redeclaration, and cannot be accessed before its actual line of code.

//Const F : This variable is block scoped, reassignment and redeclaration, requires an initial value immediately, and cannot be accessed before its actual line of code.


//Task 29 : Self Invoking Function

// (function(name){

//     alert("Welcome to " + name);

// })("JavaScript")


// (function(product, discount){

//     alert(`This ${product} is on sale. The ${product} discount is ${discount} percentage`);

// })("Shirt",63)

//Task 30 : Callback / Higher-Order Function

function welcome(){

    console.log("Welcome");
}

function execute(callback){

    callback();
}

execute(welcome);

//Task 31 : Generator Function - Cashback

function* cashback(){

    yield "10% cashback";
    
    yield "20% cashback";

    yield "30% cashback";

    yield "Better luck next time";
}

let x = cashback();

for (i of x){

    console.log(i);
}


// Final Mini Project :

//Task 32 : Employee Management Console

let employees = [
    {
        Name : "Arun",
        Age : 25,
        Department : "IT",
        Role : "Developer",
        Salary : 40000
    },
    {
        Name : "Priya",
        Age : 24,
        Department : "HR",
        Role : "HR Exe",
        Salary : 35000  
    },
];

//For of Loop

for (let i of employees){

    console.log(i);
}

//For in Loop

for (let i of employees){

    for (let key in i){

        console.log(key + " : " + i[key]);
    }
}

//Function creation

function employeeDisplay(i){

    console.log("Name :" + i.Name);
    console.log("Age :" + i.Age);
    console.log("Department :" + i.Department);
    console.log("Role :" + i.Role);
    console.log("Salary :" + i.Salary);
}

for (let i of employees){

    employeeDisplay(i);
}

//Return

function employeeSalary(i){

    return i.Salary;
}

for (let i of employees){

    console.log(i.Name + " Salary :", employeeSalary(i));
}

//Condition

function salary(i){
    
    return i.Salary;
}

for (let i of employees){

    if (i.Salary >= 40000){

        console.log(i.Name + " salary is greater than 40000 is " + salary(i));
    }
    else{

        console.log(i.Name + " salary is less than 40000 is " + salary(i));
    }
}

//Arrow Function

let calculation = (i, bonus)=>{

    return i.Salary + bonus;
}

for (let i of employees){

    console.log(i.Name + " salary with bonus of 5K : " + calculation(i, 5000))
}

//Generator

function* advantages(){

    yield "Medical Insurance";

    yield "Transport";

    yield "Food Allowance";

    yield "Bonus"
}

let benefits = advantages();

console.log(benefits.next().value);
console.log(benefits.next().value);
console.log(benefits.next().value);
console.log(benefits.next().value);
console.log(benefits.next().done);