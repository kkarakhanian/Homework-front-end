"use strict";

let UserName;
UserName=prompt('What is your name?');
console.log(typeof UserName);
console.log(`Username: ${UserName}`);

let Age;
Age = prompt('Write your age');
console.log(typeof Number(Age));
console.log(`Age: ${Age}`)

let UserAcceptance;
UserAcceptance = confirm('Do you want to take part in our promo');
console.log(typeof UserAcceptance);
console.log(UserAcceptance);
if (UserAcceptance) {
    alert('Thanks for your help')
} else {
    alert('You chosen No')
}

const UserId = 1895043789053n;
let BonusCode = null;
let SecondName;

alert(
    `Hello: ${UserName}!
Your age: ${Age}
Your status ${UserAcceptance}`
)

console.log ("Name", UserName, typeof UserName);
console.log("Age", Age, typeof Number(Age));
console.log("User status", UserAcceptance, typeof UserAcceptance);
console.log("User ID", UserId, typeof UserId);
console.log("Bonus Code", BonusCode, typeof BonusCode);
console.log("SecondName", SecondName, typeof SecondName);
