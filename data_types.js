// There are two types: primitive and non-primitive data types
    //1. Primitive type
        //a) String; Uses ' ', " " or ` `
let Name = "Kyla"
let greeting = 'Good evening'
let message = `Welcome home!!`
console.log(`${greeting} ${Name}. ${message}`)

        //b)Number. Both decimals and integers as JS has only one number type.
let age = 21
let price = 34.7888
console.log(`${Name}'s dress was made for ${age} months and costs ${price} dollars.`)

        //c)Represents true or false and used in conditions
let hasGraduated = 'false' //One can either use or not use quotes.
console.log(`Has ${Name} graduated? ${hasGraduated}`)

        //d)Undefined. A variable that has been declared but not given a value.
let city; //The semicolon can or not be used.
console.log(city)

        //e)Null. Used when you want to say "This variable should have no value"
let boyfriend = null
console.log(boyfriend)


    //2. Non-primitive types
        //a) Object. Stores key value pairs like python dictionaries.
let person = {
    name: "Joram",
    age: 50,
    country: "Tunisia"
}
console.log(person)
console.log(person.country)

        //b)Array. Stores a list of values eg a python list.
let hobbies = ['reading', 'coding', 'swimming']
console.log(hobbies)
console.log(hobbies[0])

// To check the data types:
let gender = 'female'
let color = null
let car 

console.log(typeof gender)
console.log(typeof color) //Historical bug in js as it returns object!!
console.log(typeof car)



