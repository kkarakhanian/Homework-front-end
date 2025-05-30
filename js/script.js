"use strict";

let userName;
userName=prompt('What is your name?');
console.log(typeof userName);
console.log(`Username: ${userName}`);

let age;
age = prompt('Write your age');
console.log(typeof Number(age));
console.log(`Age: ${age}`)

let userAcceptance;
userAcceptance = confirm('Do you want to take part in our promo');
console.log(typeof userAcceptance);
console.log(userAcceptance);
if (userAcceptance) {
    alert('Thanks for your help')
} else {
    alert('You chosen No')
}

const userId = 1895043789053n;
let bonusCode = null;
let secondName;

alert(
    `Hello: ${userName}!
Your age: ${age}
Your status ${userAcceptance}`
)

console.log ("Name", userName, typeof userName);
console.log("Age", age, typeof Number(age));
console.log("User status", userAcceptance, typeof userAcceptance);
console.log("User ID", userId, typeof userId);
console.log("Bonus Code", bonusCode, typeof bonusCode);
console.log("SecondName", secondName, typeof secondName);
