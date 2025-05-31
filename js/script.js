"use strict";

let name=prompt('What is your name?');

let age=Number(prompt('How old are you?'))

let notifications=confirm('Do you want to get notifications?')

const userId=9780652917n;
let lastLogin=null;
let nickname;

let favoriteTech=['JavaScript','Python', 'React'];

let settings= {
    theme: 'light',
    autoLogin: false,
}

let session={
    name: name,
    age: age,
    notifications: notifications,
    userId: userId,
    lastLogin: lastLogin,
    nickname: nickname,
    favoriteTech: favoriteTech,
    settings: settings,
}

alert(`Hello, ${name}! Your id: [${userId}]`);
console.log(session);

console.log(typeof name);
console.log(typeof age);
console.log(typeof notifications);
console.log(typeof userId);
console.log(typeof lastLogin);
console.log(typeof nickname);
console.log(typeof favoriteTech);
console.log(typeof settings);
