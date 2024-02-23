// single parameter ( bracket use kora jay/na korleo chole)

const getAge = (person) => person.age;
const person = {name : 'hasnat',age : 29};
// const age = getAge(person)
// console.log(age)
console.log(getAge(person));

const getFourth = (numbers) => numbers[3];
const numbers = [12, 3, 45, 56, 67, 77, 88];
// console.log(getFourth(numbers));
const fourth = getFourth(numbers);
console.log(fourth);

//------------------no parameter
const getPi = () =>Math.PI
console.log(getPi());


//--------large arrow function------(if you want to return something from this function,then you have to use "return" keyword)

const doMath = (num1, num2, num3) => {
  const sum = num1 + num2 + num3;
  const multiply = num1 * num2 * num3;
  const result = sum + multiply;
  return result;
}
console.log(doMath(1,2,3));
