'use strict';

//Вивести на сторінку в один рядок через кому числа від 10 до 20.
let output = '';
for (let i = 10; i <= 20; i++) {
    output += i;
    if (i < 20) {
        output += ', ';
    }
}
    console.log(output);

//Вивести квадрати чисел від 10 до 20.
let result = '';
for (let i = 10; i <= 20; i++) {
    const square = i * i;
    result += square;
    if (i < 20) {
        result += ', ';
    }
}
console.log(result);

//Вивести таблицю множення на 7.
let tab = '';
for (let i = 1; i <= 10; i++) {
    const result = 7 * i;
    tab += `7 * ${i} = ${result}`;
    if (i < 10) {
        tab += '\n';
    }
}
console.log(tab);

//Знайти суму всіх цілих чисел від 1 до 15.
let sum = 0;
for (let i = 1; i <= 15; i++) {
    sum += i;
}
console.log(+sum)

//Знайти добуток усіх цілих чисел від 15 до 35.
let dob = 1n;
for (let i = 15; i <= 35; i++) {
    dob *= BigInt(i);
}
console.log(dob);

//Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
let sum1 = 0;
for (let i = 1; i <= 500; i++) {
    sum1 += i;
    const count = 500;
    const average = sum1 / count;
}
console.log(sum1);

//Вивести суму лише парних чисел в діапазоні від 30 до 80.
let sumOfEvens = 0;
for(let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        sumOfEvens += i;
    }
}
    console.log(sumOfEvens)

//Вивести всі числа в діапазоні від 100 до 200 кратні 3.
let finalResult = [];
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        finalResult += i;
        finalResult += ', ';
    }
}
console.log(finalResult);

//Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
let divisors = [];
for (let i=1; i <= 8; i++) {
    if (8 % i === 0) {
        divisors += i;
        divisors += ', ';
    }
}
console.log(divisors);

//Визначити кількість його парних дільників.
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

//Знайти суму його парних дільників.
let sumOfDivisors = 0;
for (let i=1; i <= 8; i++) {
    if (8 % i === 0) {
        if (i % 2 === 0) {
           sumOfDivisors += i;
        }
    }
}
console.log(sumOfDivisors);

//Надрукувати повну таблицю множення від 1 до 10.
for (let i = 1; i <= 10; i++) {
    console.log(`--- Таблиця множення на ${i} ---`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log('\n'); // Додаємо порожній рядок для кращої читабельності між таблицями
}