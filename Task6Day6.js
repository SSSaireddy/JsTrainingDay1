//Task 1 : Student Result Analyzer

let name = "Sai";
let department = "Mechanical Engineering";

let subject1 = 85;
let subject2 = 78;
let subject3 = 92;
let subject4 = 70;
let subject5 = 88;

function analyzeResult() {

    let total = subject1 + subject2 + subject3 + subject4 + subject5;

    let average = total / 5;

    let result;

    if (average >= 50) {
        result = "Pass";
    } else {
        result = "Fail";
    }

    let grade;

    if (average >= 90) {
        grade = "A";
    } else if (average >= 75) {
        grade = "B";
    } else if (average >= 60) {
        grade = "C";
    } else if (average >= 50) {
        grade = "D";
    } else {
        grade = "Fail";
    }

    console.log("Student Name: " + name);
    console.log("Department: " + department);
    console.log("Total Marks: " + total);
    console.log("Average: " + average);
    console.log("Result: " + result);
    console.log("Grade: " + grade);
}

analyzeResult();


//Task 2 : Employee Salary Calculator

let employee = {
    name : "Arun",
    role : "Developer",
    salary : 45000,
    experience : 2
};

function calculateSalary(employee){

    let basicSalary = employee.salary;

    let Bonus = 0;
    if (employee.experience >= 5){

        Bonus = basicSalary * 0.15;
    }
    else if(employee.experience >= 2){

        Bonus = basicSalary * 0.10;
    }
    else{

        Bonus = 0;
    }

    let finalSalary = employee.salary + Bonus;


    console.log("Name : ", employee.name);
    console.log("Role : ", employee.role);
    console.log("Basic Salary : ", basicSalary);
    console.log("Bonus : ", Bonus);
    console.log("Final salary : ", finalSalary);

}

calculateSalary(employee)


//Task 3 : Filter system

let products = [
    { name: "Laptop", price: 55000, category: "electronics" },
    { name: "Mouse", price: 800, category: "electronics" },
    { name: "Shirt", price: 1200, category: "fashion" },
    { name: "Shoes", price: 2500, category: "fashion" },
    { name: "Phone", price: 30000, category: "electronics" }
];

// Price above 2000

let product1 = products.filter((c, i, t)=>{

    return c.price > 2000
})

console.log(product1);

// Get only electronics

let product2 = products.filter((c, i, t)=>{

    return c.category === "electronics"
})

console.log(product2);

// First below 1000 product

let product3 = products.find((c,i,t)=>{

    return c.price < 1000
})

console.log(product3);

// Total price

let product4 = products.reduce((acc,c,i,t)=>{

    return acc + c.price
},0)

console.log(product4);

// Check any product more than 50000

let product5 = products.some((c,i,t)=>{

    return c.price > 50000
})

console.log(product5);

// Check all price above 500

let product6 = products.every((c,i,t)=>{

    return c.price > 500
})

console.log(product6);


//Task 4 : Employee Management

let employees = [
    {
        id: 101,
        name: "Kavin",
        role: "Frontend Developer",
        salary: 40000
    },
    {
        id: 102,
        name: "Siva",
        role: "Web Developer",
        salary: 50000
    },
    {
        id: 103,
        name: "Sai",
        role: "Python Developer",
        salary: 45000
    },
    {
        id: 104,
        name: "Teja",
        role: "Java Developer",
        salary: 55000
    },
    {
        id: 105,
        name: "Siva1",
        role: "Designer",
        salary: 30000
    },
    {
        id: 106,
        name: "Sai1",
        role: "Fullstack Developer",
        salary: 35000
    }
];

// Display all employee names.

let employee1 = employees.map((c, i, t)=>{

    return c.name
})

console.log(employee1);

// Employee earning above 40,000

let employee2 = employees.filter((c, i, t)=>{

    return c.salary > 40000
})

console.log(employee2);

//Find employee with ID 103

let employee3 = employees.find((c, i, t)=>{

    return c.id === 103
})

console.log(employee3);

// Total salary

let employee4 = employees.reduce((acc, c, i, t)=>{

    return acc + c.salary
}, 0)

console.log(employee4);

// Highest paid employee

let employee5 = employees.reduce((acc, c, i, t)=>{

    return acc.salary >= c.salary ? acc : c;

})

console.log(employee5);

// Sort employee highest salary to lower 

let employee6 = [...employees].sort((a,b)=>{

    return b.salary - a.salary
})

console.log(employee6);

// New array containing only employee names

let employee7 = employees.map((c, i, t)=>{

    return c.name
})

console.log(employee7);


//Task 5 : Shopping Cart

let cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 }
];

function calculateCart(cart){

    let totalItem = cart.reduce((acc, c, i, t)=>{
        
        return acc = acc + (c.price * c.quantity);
    }, 0)

    let discount = 0;

    if (totalItem > 50000){

        discount = totalItem * 0.10;
    }
    else{

        discount = 0;
    }

    let finalPayable = totalItem - discount;

    console.log("Total cart value : ", totalItem);
    console.log("Discount : ", discount);
    console.log("Final payable amount : ", finalPayable);
}

calculateCart(cart)


//Task 6 : Student Search System

let students = [
    { name: "Arun", age: 21, mark: 85 },
    { name: "Priya", age: 22, mark: 92 },
    { name: "Karthi", age: 20, mark: 67 },
    { name: "Dinesh", age: 23, mark: 45 }
];

// All student names

let student1 = students.map((c,i,t)=>{

    return c.name
})

console.log(student1);

// Who scored above 80

let student2 = students.filter((c,i,t)=>{

    return c.mark > 80
})

console.log(student2);

// Find student name "Priya"

let student3 = students.find((c,i,t)=>{

    return c.name === "Priya"
})

console.log(student3);

// Calculate average marks

let student4 = students.reduce((acc,c,i,t)=>{

    return acc = acc + c.mark;
}, 0)/students.length;

console.log(student4)

// Check wheather anyone failed

let student5 = students.some((c,i,t)=>{

    return c.mark < 50
})

console.log(student5)

// Check wheather anyone above 40 marks

let student6 = students.every((c,i,t)=>{

    return c.mark > 40
})

console.log(student6);

// Sort students by marks

let student7 = [...students].sort((a,b)=>{

    return b.mark - a.mark
})

console.log(student7);


//Task 7 : Array Transformation Challenge

let numbers = [12, 5, 8, 21, 44, 7, 30, 15];

// New array containing number * 2

let number1 = numbers.map((c,i,t)=>{

    return c * 2
})

console.log(number1);

// Get only even numbers

let number2 = numbers.filter((c,i,t)=>{

    return c % 2 === 0
})

console.log(number2);

// Get number greater than 15

let number3 = numbers.filter((c,i,t)=>{

    return c > 15
})

console.log(number3);

// Find 1st number greater than 20

let number4 = numbers.find((c,i,t)=>{

    return c > 20
})

console.log(number4);

// Total of all numbers

let number5 = numbers.reduce((acc,c,i,t)=>{

    return acc = acc + c
}, 0)

console.log(number5);

// Check whether any number is greater than 40

let number6 = numbers.some((c,i,t)=>{

    return c > 40
})

console.log(number6);

// Check whether every number is positive

let number7 = numbers.every((c,i,t)=>{

    return c > 0
})

console.log(number7);

// Sort from highest to lowest

let number8 = numbers.sort((a,b)=>{

    return b-a
})

console.log(number8);



//Task 8 : String Analyzer

let sentence = prompt("Enter a sentence :");

// Total characters

console.log(sentence.length);

// Uppercase sentence

console.log(sentence.toUpperCase());

// Lowercase sentence

console.log(sentence.toLowerCase());

// whether it constains "JavaScript"

console.log(sentence.includes("JavaScript"));

// First character

console.log(sentence.slice(0,1));

// Last character

console.log(sentence.slice(-1));

// Number of words

console.log(sentence.trim().split(/\s+/).length);

// Replace "JavaScript" to "Python"

console.log(sentence.replace("JavaScript","Python"));

// Convert sentence into an array using split()

console.log(sentence.split(" "));




// Final Mini Project - Employee Dashboard

let employees1 = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2
    },
    {
        id: 102,
        name: "Priya",
        department: "HR",
        salary: 50000,
        experience: 4
    },
    {
        id: 103,
        name: "Karthi",
        department: "IT",
        salary: 65000,
        experience: 6
    }
];

// Display all employees

employees1.forEach((c,i,t)=>{

    console.log(c);
})

// Search employee by name

let employee11 = employees1.find((c,i,t)=>{

    return c.name === "Karthi"
})

console.log(employee11);

// Department Filter

let employee12 = employees1.filter((c,i,t)=>{

    return c.department === "IT"
})

console.log(employee12);

// Salary Filter

let employee13 = employees1.filter((c,i,t)=>{

    return c.salary > 50000
})

console.log(employee13);

// Salary calculation

let employee14 = employees1.reduce((acc,c,i,t)=>{

    return acc = acc + c.salary
}, 0)

console.log("Total Salary : ", employee14)

// Highest Salary

let employee15 = employees1.reduce((acc,c,i,t)=>{

    return acc >= c.salary ? acc : c.salary;
}, 0)

console.log("Highest salary : ", employee15)

// Experience

let employee16 = employees1.filter((c,i,t)=>{

    return c.experience > 3
})

console.log(employee16);

// Sorting

// Higher to Lower

let employee17 = [...employees1].sort((a,b)=>{

    return b.salary - a.salary
})

console.log(employee17);

// Lower to Higher

let employee18 = [...employees1].sort((a,b)=>{

    return a.salary - b.salary
})

console.log(employee18);

// Statistics

let employee19 = employees1.length;

let employee20 = Math.round(employee14/employee19);

console.log("Total Employees : ", employee19);
console.log("Total Salary : ", employee14);
console.log("Highest Salary : ", employee15);
console.log("Average Salary : ", employee20);