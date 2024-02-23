// function declaration

function add(a,b){
  return a + b;
}
const sum = add(2,4);
console.log(sum);

// function expression
const sum2 = function(x,y){
  return x+y;
}


// arrow function
const add2 = (a,b) => a+b;
const add3 = (num1,num2,num3,num4,num5) => num1 + num2 + num3 + num4 + num5;
const multiply = (p,q) => p * q;

const sum3 = add2(2,3)
console.log(sum3);
const sum4 = add3(1,2,3,4,5);
console.log(sum4);
const mult = multiply(2,4);
console.log(mult);

