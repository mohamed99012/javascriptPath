// Normal Function
let sum = function sum1() {
  console.log(1 + 2);
};
// Anonymous Function (without name)
let Anonymous = function () {
  console.log(2 + 2);
};
// Arrow function
let Arrow = (x, y) => {
  console.log(3 + 2);
};
sum();
Anonymous();
Arrow();
let sum5 = (x) => {
  return ++x;
};
console.log(sum5(8));
//arrow function with default parameter
let sum6 = (a = 20, b = 10) => {
  return a * b;
};
console.log(sum6(2));
//arrow function with rest parameter
let sum7 = (...args) => {
  let add = args.reduce(function (a, b) {
    return a + b;
  }, 10);
  console.log(`added Array : ` + add);
};
// let nums = [1, 2, 3, 5, 7];
sum7(0, 3, 4, 5);
let number = (x) => x / 2 + 1; // without return and without ()
console.log(number(20));
let name2 = (v) => {
  return v + " yes";
};
console.log(name2("Muhammed"));
