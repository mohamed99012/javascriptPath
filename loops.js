for (let start = 2; start <= 7; start++) {
  console.log(start);
}
console.log("------------------------");
function Employee(employee_info) {
  this.name = "Muhammed";
  this.age = 29;
  this.status = true;
}
// using for in opject
let person1 = new Employee("Ali");
for (let p in person1) {
  console.log(person1[p]);
}
console.log("------------------------");

// using for in array
let names = ["muhammed", "Ali", "Sameer"];
for (const x of names) {
  console.log(x);
}
// while loop
let q = 0;
while (q < 5) {
  console.log(`while is ${q}`);
  q++;
}
// do while loop
let d = 10;
do {
  console.log(`do while is ${d}`);
  d++;
} while (q < 5);
// break statement
for (let a = 0; a < 10; a += 2) {
  console.log(a);
  if (a == 6) {
    break;
  }
}
console.log("------------------------");
// continue statement
for (let c = 0; c < 10; c++) {
  if (c == 5) {
    continue;
  }
  console.log(c);
}
console.log("------------------------");
let f = 0;
while (f < 8) {
  f++;
  if (f == 5) {
    continue;
  }
  console.log(f);
}
