// 1. Write a function that loops through an array of numbers and returns the sum of the numbers.
let arr = [1, 2, 3, 4];
function addition(numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}
console.log(addition(arr));

// 2. Create an object with properties name and age. Write a function to add a new property city to the object.
let student = {
  name: "Abu Raihan",
  age: 18,
};

function addCity(obj, city) {
  obj.city = city;
}
addCity(student, "Khulna");
console.log(student);

// 3. Write a function that takes a number and returns whether it is even or odd.

function checkEvenOrOdd(n) {
  if (n % 2 === 0) {
    console.log(n + " is an even number!!!");
  } else {
    console.log(n + " is a odd number!!!");
  }
}
checkEvenOrOdd(51);

// 4. Create an object that represents a car with properties brand and model. Write a function to update the model of the car.

let car = {
  brand: "Toyota",
  model: "Corolla",
};

function updateModel(vehicle, model) {
  vehicle.model = model;
}
updateModel(car, "Civic");
console.log(car);

// 5. Write a function that loops through an object and prints each property and its value.

let person = {
  name: "Abul",
  age: 30,
  isStudent: true,
  homeDistrict: "Dhaka",
};

function getPropertyAndValue(man) {
  for (let manProperty in man) {
    console.log(manProperty + " : " + man[manProperty]);
  }
}
getPropertyAndValue(person);
