"use strict";

const user = {
    name: 'Paul',
    age: 30,
    isOnline: false,
    friends: ['Karolina', 'Maxim', 'Dany'],
    settings: {
        theme: 'dark',
        notifications: true
    }
}
const firstFriendName = user.friends[0];
let notificationsEnabled = user.settings.notifications;

console.log(
    user.name,
    user.friends.length,
    firstFriendName,
    user.settings.theme,
    notificationsEnabled
    )