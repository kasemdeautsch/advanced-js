/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [5,7,9];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];

let [john, mary, joe] = ages
console.log(john, mary, joe);
console.log('1----------------------');

// Destructuring objects
let jobs = {
    mike: "Designer",
    Jill: "Developer",
    Alicia: "Accountant",
};

let {mike, Jill, Alicia} = jobs
console.log(mike, Jill, Alicia)
console.log('2----------------------');

// Destructuring subsets
let languages = ["en", "fr", "sp", "gr", "jap"]
let [jouhNative, jounSecondary] = languages
console.log(jouhNative, jounSecondary)

let [, , maryNative, marySecondary] = languages
console.log(maryNative,marySecondary)

let languages2 = {
    firstLanguage: "english",
    secondLanguage: "french",
    thirdLanguage: "german",
    forthLanguage: "japaneese",
};

let {firstLanguage, thirdLanguage} = languages2
console.log(firstLanguage,thirdLanguage)


console.log('3----------------------');

// Using rest parameter syntax
let fruits = ["apple", "orange", "banana", "beach", "cherry"]

let [favorite, secondFaforite, ...rest] = fruits
console.log(favorite)
console.log(secondFaforite)
console.log(rest)

let favoriteFood = {
    brian: "pizza",
    anna: "pasta",
    sara: "vegetarian",
    andrea: "steak",
}

// let {brian, andrea} = favoriteFood
// console.log(brian, andrea)

let {anna, ...rest2} = favoriteFood
console.log('-----')
console.log(anna)
console.log(rest2)
console.log('//////-----')

// Chalenge

let students = [
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'John',
        subjects: ['art', 'cad', 'english', 'maths', 'science'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, maths: 77, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];

// const makeList = (arr, student) => {
//     let copy=[]
//     for (let item of arr) {
//         if (student == item.name){
//             copy = [...item.subjects]
//         }
//     }
//      return copy
// }

// let [first, second, ...rest3] = makeList(students, "John")
// console.log(first, second, rest3)

const makeList = (arr, student) => {
    for (let item of arr) {
        if (student == item.name){
            return item.subjects
        }
    }
}

let [first, second, ...rest4] = makeList(students, "John")
console.log(first, second, rest4)




