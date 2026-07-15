// console.log("Hello Web Dev Students!!");


// JavaScript executes one line at a time.

// console.log("Start");   // Executes immediately

// console.log("Middle");  // Executes next

// console.log("End");     // Executes last


//DATA TYPES

// let name = "Navin";        // String
// let age = 50;              // Number
// let isStudent = true;      // Boolean
// let marks = [80, 90, 95];  // Array
// let person = {             // Object
//     name: "John",
//     age: 25
// };

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof isStudent);
// console.log(typeof marks);    // object
// console.log(typeof person);

// console.log(marks[2]);
// console.log(person.age);



// //array push
// let fruits = ["Apple","Orange","Banana"];

// console.log(fruits[0]);

// fruits.push("Mango");

// console.log(fruits);


//array map
// let numbers = [1,2,3];

// let doubled = numbers.map(number => number * 2);

// console.log(doubled);


//array filter
// let numbers = [5,8,10,15];

// let result = numbers.filter(number => number >= 10);

// console.log(result);


//looping through array

// let numbers = [10,20,30];

// for(let number of numbers){

//     console.log(number);
// }


// for(i = 0; i < 5; i++){
// console.log(i);
// }



//Normal function
// function greet(name) {
//     console.log("Hello " + name);
// };
//Arrow function
// const greet = (name) => {
//     console.log("Hello " + name );
// };

// greet("navin");


//normal function
// function square(x) {
//     return x * x;
// }

//Arrow Function
// const square = x => x * x;

// console.log(square(5));


//IF ELSE STATEMENT
let age = 17;

// if (age >= 18) {
//     // valueIfTrue
//     console.log("Adult");
// } else {
//      // valueIfFalse
//     console.log("Minor");
// }

 //TERNARY CONDITION (condition? valueiftrue : valueiffalse)

// age >= 20 ? console.log("Adult") : console.log("minor");



let num = 5;
const myNum = 4;

// if(num == 5)
// {
//     console.log("number is 5");
// }

// if(num === 5)
// {
//     console.log("number is an integer and is 5");
// }

// function Hello()
// {
//     if(num == 5){
//         // myNum = 3;
//         console.log(myNum);
//     }
// }

// Hello();

//HANDLING ERROR - BREAK PROOF

function Hello2()
{
    try
    {
        // Code that may cause an error
        if(num == 5){
            myNum = 3;
            console.log(myNum);
        }

    } catch (error) {
        // Code to handle the error
        console.log("An error occured!");
    }
}

// Hello2();

