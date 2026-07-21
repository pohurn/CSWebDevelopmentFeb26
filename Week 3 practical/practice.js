// const temperature = 35;

// if (temperature < 20) {
//   console.log("the temperature is cold");
// } else if (temperature > 20 && temperature < 30) {
//   console.log("the temperature is warm");
// } else if (temperature > 30) {
//   console.log("temperature is hot");
// }

// // array filter
// let numbers = [5, 8, 10, 15];

// let result = numbers.filter((number) => number >= 10);

// console.log(result);

function brewCoffee(callback) {
  console.log("A: started making coffee");
  setTimeout(() => {
    const newCoffee = "Vanilla late";
    callback(newCoffee);
  }, 3000);
  console.log("B: Coffee brewing");
}

brewCoffee((finishedCoffee) => {
  console.log("C: your " + finishedCoffee + " is ready!");
});
