"use strict";
// Question 13
let transports = ["Motor Bike", "Car", "Cycle"];
transports.forEach(transport => {
    console.log(`I want to own ${transport}`);
});
// Question 14
let guests = ["Tooba", "Mahi", "Ayeza"];
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
let unableToAttend = "Ayeza";
console.log(`${unableToAttend} can't make it to dinner`);
let newGuest = "Munazzah";
guests[guests.indexOf(unableToAttend)] = newGuest;
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
// Question 15
