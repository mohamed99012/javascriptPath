// used to copy arrays or add array items to another one
let names = ["Muhammed", "Ahmed", "Ali"];
let employeesNames = [...names, "Hossam", "Mustafa"];
console.log(employeesNames);
let arr = [1, 2, 3, 4, 5];
let arr2 = [...arr];
console.log(arr2);
console.log("----------------------");
// spread operator don`t affect the original array
let origArr = ["sama", "esraa"];
let copArr = [...origArr];
copArr.push("alaa");
console.log(origArr); // output ['sama' , 'esraa']
console.log(copArr); // output ['sama' , 'esraa' , 'alaa']
console.log("----------------------");
// used with array of string
let strArr = ["a", "b", "c", ..."omer"];
console.log(strArr);
console.log("----------------------");
let a = [9, 8, 7];
function myf(...a) {
  return a[i] + 1;
}
console.log(myf());
