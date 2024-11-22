/*
let personAge = 17;
if (personAge >= 18) {
  console.log("Pilngadīgs!")
} else {
    console.log("Nepilngadīgs!")
}
*/


let namesArray = ["Jānis", "Anna", "Zaiga"];
for (let i = 0; i < namesArray.length; i++) {
    console.log(namesArray[i]);
}
function sayHello(name) {
    return `Labdien, ${name}!`;
}
let myName = "Kristaps"; 
console.log(sayHello(myName));
