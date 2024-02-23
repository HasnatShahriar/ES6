const number = [1,2,34,5,67];
const maxNumber = Math.max(...number);
console.log(maxNumber);


// ------------

const friends = [1, 3, 45, 67, 88];
const bondhu = friends;
const dusto = [...friends];
friends.push(33);
console.log(friends);
console.log(bondhu);
console.log(dusto);

//advanced
const songkha = [999,...friends,888]; //add extra element while copy
console.log(songkha);

