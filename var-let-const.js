
  // var : no reason to use it.  (function scope)
  // let : allow it to reassign. (block scope)
  // const : Do not allow it to reassign. (block scope)




  // const diye variable set korle oita bar fullt set kora jabe na,kintu modify kora possible

 const numbers = [12, 3, 4, 5, 7];
//  numbers = [12, 4,5,6 ];
numbers[0] = 2;
numbers[1] = 3;
numbers[2] = 4;
numbers[3] = 5;
numbers[4] =6;
console.log(numbers);


const student = {
  name : 'hasnat',
  id : '18-377591-1'
}

// student = {
//   name : 'hasnat shahriar'     // it is wrong ..fully set kora jabe na,but modify kora jabe.
// }

student.name = 'hasnat shahriar'

console.log(student);


//  var function scope thakar karone loop er bairer i er value 5 hobe
// var i = 13;
// for(var i = 0;i < 5; i++){
//   console.log(i);                       
// }
// console.log('value ' + i);


// let block scope thakar karone loop er bairer i er value 13 hobe
// let i = 13;
// for(let i = 0; i < 13;i++){
//   console.log(i);
// }
// console.log('value '+ i);

//  loop er vitor const diye declare kora jabe na...error dibe but eivabe kora jabe


let sum = 0;
for(let i = 0; i < 100;i++){
  const num = i;
  sum = sum + num;
  console.log(num);
}
console.log(sum);
