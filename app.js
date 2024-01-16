//console.log("Working");

let cars = [
  {
    color: "purple",
    type: "minivan",
    registration: new Date("2017-01-03"),
    capacity: 7,
  },
  {
    color: "red",
    type: "station wagon",
    registration: new Date("2018-03-03"),
    capacity: 5,
  },
];
//console.log(cars);
//add car to first position
// let car = {
//   color: "red",
//   type: "cabrio",
//   registration: new Date("2016-05-02"),
//   capacity: 2,
// };
//cars.unshift(car);
//console.log(cars);

//add car to last position
// let car = {
//   color: "red",
//   type: "cabrio",
//   registration: new Date("2016-05-02"),
//   capacity: 2,
// };
// cars.push(car);
// console.log(cars);

//Add a new object in the middle - Array.splice

// let car = {
//   color: "red",
//   type: "cabrio",
//   registration: new Date("2016-05-02"),
//   capacity: 2,
// };
// cars.splice(4, 0, car);
// console.log(cars);

let car = cars.find((car) => car.color === "red");
console.log(cars);
