'use strict';

//Print on the page in one line separated by commas the numbers from 10 to 20.
let output = '';
for (let i = 10; i <= 20; i++) {
    output += i;
    if (i < 20) {
        output += ', ';
    }
}
    console.log(output);

//Print the squares of numbers from 10 to 20.
let result = '';
for (let i = 10; i <= 20; i++) {
    const square = i * i;
    result += square;
    if (i < 20) {
        result += ', ';
    }
}
console.log(result);

//Print the table of multiplication by 7.
let tab = '';
for (let i = 1; i <= 10; i++) {
    const result = 7 * i;
    tab += `7 * ${i} = ${result}`;
    if (i < 10) {
        tab += '\n';
    }
}
console.log(tab);

//Find the sum of all integers from 1 to 15.
let sum = 0;
for (let i = 1; i <= 15; i++) {
    sum += i;
}
console.log(+sum)

//Find the product of all integers from 15 to 35.
let dob = 1n;
for (let i = 15; i <= 35; i++) {
    dob *= BigInt(i);
}
console.log(dob);

//Find the arithmetic mean of all integers from 1 to 500.
let sum1 = 0;
for (let i = 1; i <= 500; i++) {
    sum1 += i;
    const count = 500;
    const average = sum1 / count;
}
console.log(sum1);

//Print the sum of only even numbers in the range from 30 to 80.
let sumOfEvens = 0;
for(let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        sumOfEvens += i;
    }
}
    console.log(sumOfEvens)

//Print all numbers in the range from 100 to 200 multiples of 3.
let finalResult = [];
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        finalResult += i;
        finalResult += ', ';
    }
}
console.log(finalResult);

//A positive integer is given. Find and print all its divisors.
let divisors = [];
for (let i=1; i <= 8; i++) {
    if (8 % i === 0) {
        divisors += i;
        divisors += ', ';
    }
}
console.log(divisors);

//Find the number of its even divisors.
let divisors1 = [];
for (let i=1; i <= 8; i++) {
    if (8 % i === 0) {
        if (i % 2 === 0) {
            divisors1 += i;
            divisors1 += ', ';
        }
    }
}
console.log(divisors1);

//Find the sum of its even divisors.
let sumOfDivisors = 0;
for (let i=1; i <= 8; i++) {
    if (8 % i === 0) {
        if (i % 2 === 0) {
           sumOfDivisors += i;
        }
    }
}
console.log(sumOfDivisors);

//Print the complete multiplication table from 1 to 10.
for (let i = 1; i <= 10; i++) {
    console.log(`--- Таблиця множення на ${i} ---`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log('\n');
}