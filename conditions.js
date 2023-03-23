// If Statement
let age = 70;
if (age < 18) {
  console.log(`Too Small`);
} else if (age > 60) {
  console.log(`Too Big`);
} else {
  console.log("Out Of Required");
}
// Switch
let s = 0;
switch (s) {
  case 10:
    console.log(`10 Your Record is very low`);
    break;
  case 20:
    console.log(`20 Your Record is low`);
    break;
  case 30:
    console.log(`30 Your Record is better`);
    break;
  case 50:
    console.log(`50 Your Record is Accepted`);
    break;
  case 75:
    console.log(`75 Your Record is good`);
    break;
  case 90:
    console.log(`75 Your Record is excellent`);
    break;
  default:
    console.log("Unknown Record")
    break;
}
