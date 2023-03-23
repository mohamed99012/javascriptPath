function hello() {
  console.log("Muhammed koraem");
}
hello();
function sum(x,y){
    let sum = x + y ;
console.log(sum);
}
sum(1,3)
// default function parameter 
function add(x, y = 10) {
  let sum = x + y;
  console.log(sum);
}
add(2);  // output = 12
// returning function
function getElementNumber(num1 , num2 ){
    return num1 + num2 ; 
}
let R = getElementNumber(4 , 5 );
console.log(R)
// Anonymous function
let name = function(){
    console.log("Muhammed Koraem")
}
name()
// Anonymous function as a parameter
setTimeout(function(){
    console.log("Ahmed Ali")
} , 3000) 
// function constructor
let newFun = new Function('x' , 'y' ,'return x + y');
console.log(newFun(9,4))
// Arrow function
