let arr = [1, 2, 3, 4, 5];
// rest parameter ..args used to pass parameters to function as an array
function myFun(x, y, ...args) {
  let total = 0;
  for (let i of args) {
    total += x + y + i;
  }
  console.log(total);
}
myFun(2, 3, ...arr);
