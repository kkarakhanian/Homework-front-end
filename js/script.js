"use strict";

let name=prompt("What is your name?");
if (name) {
    let showGreeting = confirm("Do you want to see a greetings?");
    if (showGreeting) {
        alert("Hello " + name + "!");
    }
}