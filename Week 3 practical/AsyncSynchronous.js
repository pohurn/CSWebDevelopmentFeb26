// console.log("Start");
// // Start a timer.
// // The callback DOES NOT execute immediately.
// // It is sent to the Web API.
// setTimeout(() => {
//     console.log("Timer finished");
//     myFunction();
// }, 0);
// // JavaScript DOES NOT WAIT.
// // It continues executing.
// console.log("End");


// function myFunction(){
//     console.log("Function Executed after timer end!")
// }


// //EXAMPLE ONE - TIMERS EXECUTION
// console.log("Start");

// setTimeout(() => {
//     console.log("Timer 1");
// }, 1000);

// setTimeout(() => {
//     console.log("Timer 2");
// }, 0);

// console.log("End");



//EXAMPLE TWO - BUSY TASKS

// console.log("Start");
// setTimeout(() => {
//     console.log("Timer");
// }, 0);
// // Simulate a long task
// for (let i = 0; i < 1; i++) {
//     // Busy work
//     console.log(i);
// }
//  console.log("Loop Finished");


//EXAMPLE THREE - API CALL
// console.log("Start");
// // Send an HTTP request
// fetch("https://jsonplaceholder.typicode.com/users")
// // Runs when the response arrives
// .then(response => response.json())
// // Runs after JSON is ready
// .then(data => {
//     console.log(data);
// });
// console.log("End");


//EXAMPLE FOUR - ASYNC/ AWAIT

// Function marked as async
//  async function getUser() {

//     console.log("Fetching data...");
//     // Wait until fetch finishes
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
//     // Wait until JSON conversion finishes
//     const data = await response.json();
//     console.log(data);
// }

// console.log("Start");
// // getUser();
// await getUser();

// console.log("End");


//CALLBACK

// // Callback function
// function greet() {
//     console.log("Hello!");
// }

// // Function that accepts another function
// function execute(callback) {

//     console.log("Before callback");

//     // Execute the callback
//     callback();

//     console.log("After callback");
// }

// // Pass greet as the callback
// execute(greet);


// //PROMISE

// // Create a Promise
// const myPromise = new Promise((resolve, reject) => {

//     let success = true;

//     if (success) {
//         resolve("Operation Successful!");
//     } else {
//         reject("Something went wrong!");
//     }

// });

// // // Handle the result
// myPromise
//     .then(result => {
//         //we got a success above that's why it goes in then (because we got a value)
//         console.log(result);
//     })
//     .catch(error => {
//         //catch is executed when rejection occurs in promise
//         console.log(error);
//     });


// const downloadFile = new Promise((resolve, reject) => {

//     console.log("Downloading...");

//     // Simulating a 3 second download
//     setTimeout(() => {

//         resolve("Download Complete!");

//     }, 3000);

// });

// downloadFile
//     .then(message => {
//         console.log(message);
//     });


// CHANING PROMISES

function getNumber() {
    return Promise.resolve(8);
}

getNumber()
    .then(number => {
        console.log(number);
        return number * 2;
    })
    .then(result => {
        console.log(result);
        return result + 5;
    })
    .then(finalResult => {
        console.log(finalResult);
    });