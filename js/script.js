"use strict";

const UserName = "Karen" // This const indicates that the user's name is Karen.
console.log(typeof UserName)
let UserAge = 27 // This variable indicates that the user is 27 years old
console.log(typeof UserAge)
const isUserVerified = true // This const indicates that the user is verified in the system
console.log(typeof isUserVerified)
const registrationDate = new Date(2024, 8, 17) // This const indicates that the user  is registered on the specified date
console.log(typeof registrationDate)
let UserCardNumber = BigInt(4627051318145941) // This const indicates that user has oun card number. It could be change after a while
console.log(typeof UserCardNumber)
let UserPromo = "SPRING2025"// This const indicates user's promocode
console.log(typeof UserPromo)
let UserReserveName; // This variable indicates that the user does not have a reserve name at the moment, but that space for it has been reserved for the future.
console.log(typeof UserReserveName)
let UserBonuses = 351 // This variable indicates user's bonuses. They may change values in the course of use
console.log(typeof UserBonuses)


console.log(`User ${UserName}, Age ${UserAge}, Verified: ${isUserVerified}`)
console.log(`Registration Date: ${registrationDate}, Bonuses: ${UserBonuses} , Promo: ${UserPromo}`)
console.log(`User: ${UserName}, Reserve name: ${UserReserveName}, Age: ${UserAge}`)