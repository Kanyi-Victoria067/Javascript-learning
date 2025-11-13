let age = 20;
console.log(age); 

age = 21;
console.log(age);

const Name = "Victoria";
console.log(Name);

//name = "Vikki"; This is an error as you can't change a constant!!

//one can store different data types inside a variable eg strings, number...
let isStudent = true; //boolean
let hobbies = ["reading", "coding"]; //Array
let person = {name: "Vince", gender: "male"}; //object
let nothing = null; //null value
let notDefined; //undefined(no value yet)

console.log(isStudent);
console.log(hobbies);
console.log(person);
console.log(nothing);
console.log(notDefined);

const myName = "Valen";
let myAge = 10;
let myFavouriteColour = "Golden"
let mySchool = "St.Thomas Academy" 

console.log(`My name is ${myName}, I’m ${myAge} years old, my favorite color is ${myFavouriteColour}, and my school is called ${mySchool}.`);

console.log(`Is Victoria a student? ${isStudent}`);

//IF USING $ SIGN WE DON'T USE SINGLE QUOTE MARKS '' WE USE BACKTICKS ``. NOOTE!!!

//Another method also other than $ and ``
console.log("The student " + myName + " is " + myAge + " years old!");
