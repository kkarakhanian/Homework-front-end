'use strict';

//Print the numbers from 20 to 30, separated by a space, using a step of 0.5 (20 20.5 21 21.5....).
let output = '';
for (let i = 20; i <= 30; i += 0.5) {
    output += i;
    if (i <= 30) {
        output += ', ';
}
    }
console.log(output);

//One dollar is worth 27 UAH. Print the data with the cost of 10, 20, 30 ... 100 dollars.
let cours = 27;
for (let i = 10; i <= 100; i += 10) {
    const cost = i * cours;
    console.log(`${i} USD = ${cost} UAH`);
}

//An integer is given. Print all integers from 1 to 100, the square of which does not exceed the number N.
let integer = 10;
for (let i = 1; i <= 100; i++) {
     const squareOf = i * i;
if (squareOf <= 10) {
    console.log(i);
} else {
    break;
}
}

//An integer is given. Find out if it is prime (a prime is a number greater than 1 that has no divisors other than 1 and itself).
let integral1 = 2;
let isPrime = true;
if (integral1 <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(integral1); i++) {
        if (integral1 % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(integral1 + " — is a prime number.");
} else {
    console.log(integral1 + " — is not a prime number.");
}

//Some number is given. Determine whether this number can be obtained by raising the number 3 to a certain power.
// (For example, the numbers 9, 81 can be obtained, but 13 cannot.)
let givenNumber = 15;
let isPowerOfThree = false;
let power = 1;

for (let power = 1; power <= 15; power *= 3) {
    if (power === 15) {
        isPowerOfThree = true;
        break;
    }
}

if (isPowerOfThree) {
    console.log(15 + " can be obtained as 3 to some degree.");
} else {
    console.log(15 + " can't be obtained as 3 to some degree..");
}