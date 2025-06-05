"use strict";

let finalMessage = '';
let age = prompt('How old are you?');
if (age === null || age === '' || isNaN(age)) {
    alert('It is a pity you did not want to enter your age');
} else {
    age = +age;
    alert('Your age is ' + age);
    finalMessage += 'Your age is ' + age + '\n';
}


const city = prompt('What city do you live in?');
if (city === null || city === '') {
    alert('It is a pity you did not want to enter your city');
} else if (city === 'Kyiv') {
    alert('You live in the capital of Ukraine');
    finalMessage += 'You live in the capital of Ukraine\n';
} else if (city === 'Washington') {
    alert('You live in the capital of America');
    finalMessage += 'You live in the capital of America\n';
} else if (city === 'London') {
    alert('You live in the capital of Great Britain');
    finalMessage += 'You live in the capital of Great Britain\n';
} else {
    alert(`You live in the ${city}`);
    finalMessage += `You live in the ${city}\n`;
}


const sport = prompt('What sport do you like?');
if (sport === null || sport === '') {
    alert('It is a pity you did not want to enter your sport');
} else if (sport === 'Football') {
    alert('Cool! Do you want to be like Ronaldo?');
    finalMessage += 'Cool! Do you want to be like Ronaldo?\n';
} else if (sport === 'Tennis') {
    alert('Cool! Do you want to be like Svitolina?');
    finalMessage += 'Cool! Do you want to be like Svitolina?\n';

} else if (sport === 'Basketball') {
    alert('Cool! Do you want to be like LeBron?');
    finalMessage += 'Cool! Do you want to be like LeBron?\n';
}

if (finalMessage) {
    alert(finalMessage);
}



