'use strict';

let hour = prompt('What hour is it now?');
if (isNaN(Number(hour))) {
    alert('You must enter an actual hour');
} else {
    const seconds = hour * 3600;
    alert(`In ${hour} hour(s) - ${seconds} second(s)`);
}