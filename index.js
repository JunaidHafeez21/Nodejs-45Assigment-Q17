"use strict";
// Q17. shrinking guest list: you just found on that your new dinner table won't arrive in time for the dinner and you have space for only two guest for dinner...start with your program from exercise 16. Add a new line that prints a mesage saying that you can invite only two people for dinner.
// .Remove guests from your list one at a time untill only two names remain in your list. each time you pop a name from your list, print a message to that person letting them know you're sorry you can't invite them to dinner.
// . Print a message to each of the two people still on your list, letting them know they're still invited.
// . Remove the ladt two names from your lists, so you have an empty list, print your list to make sure you actually have an empty list at the end of your program.
console.log("i can invite only two people to dinner");
// while loop ki condtion hum br br unlimited time print krwany k liye use krty hai.
let guestArr = ["Junaid Hafeez", "Nida Rizwan", "Ahsen", "Ducky"];
while (guestArr.length > 2) {
    let removeguest = guestArr.pop();
    console.log(`Dear ${removeguest}, you are not invited to the dinner`);
}
guestArr.map((item) => console.log(`Dear ${item}, you are still invited to the dinner`));
guestArr.pop();
console.log(guestArr);
