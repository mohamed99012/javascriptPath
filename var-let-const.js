var firstName = "Muhammed";
var firstName = "Ali";
console.log(firstName);
////////////////////////////////////////
let secName = "Hossam";
secName = "Hameed"; // can be modified
console.log(secName);
// let secName = "Ahmed"; error let cant be redeclare variable
/////////////////////////////////////
const bye = 3.14; // must be initilized
console.log(bye);
//////////////////////////////////
let age = 22; // global variable
function myF() {
  let age = 33; // local variable
  console.log("age inside the function : " + age);
}
myF();
console.log("age outside the function : " + age);
