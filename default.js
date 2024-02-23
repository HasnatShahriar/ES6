//  default: if value is not provided. take this as a default.
function add(num1,num2 = 0){
  const result = num1 + num2;
  console.log(num1,num2,result);
  return result;
}

// const sum = add(12,2)
// const sum = add(12)
const sum = add()


function name(firstName,secondName = ''){
  const fullName = firstName +' '+ secondName;
  console.log(fullName);
  return fullName;
}

name('hasnat','shahriar');


//  for array
function numbers([]){

}


// for object
function person(human ={}){

}
