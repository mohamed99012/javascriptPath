let arr1 = [1, 2, 3, 4, 5];
// add all array elements
function addArrElements(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}
console.log(`Sum of the Array 1 is : ` + addArrElements(arr1));
// filter the array
let arr2 = [1, 3, 5, 7, 9];
function filterTheArray(array) {
  let arrFiltered = [];
  for (let f = 0; f < array.length; f++) {
    if (array[f]%3 == 0) {
      arrFiltered.push(array[f]);
    }
  }
  return arrFiltered;
}
console.log(`the new array is ` + filterTheArray(arr2));
