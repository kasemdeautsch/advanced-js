/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

// function addTow(a, b){
//     return a+b
// }

// console.log(addTow(3,5))
// let sum = addTow(9,3)
// console.log(sum)


// Arrow Function With Parameters

const addTow = (a, b) => {
    return a+b
}

let sum = addTow(9,3)
console.log(sum)

// Single Line Arrow Function With Parameters

const addTow2 = (a, b) => a + b;
// const addTow2 = (a, b) => (a + b); Also valid
let sum2 = addTow(9,7)
console.log(sum2)

// Implicit Returns

const saySomething = message => console.log(message+' then Bye')
saySomething('Hello')

const sayHello = () => console.log('--Hello again')
sayHello()

// Returning Multiple Lines

const returnMultipleLInes = () => (
    `<p>
      This is a multiline string
    </p>`
)
console.log(returnMultipleLInes())

// Chalenge
// let students = [
//     {
//         name: 'John',
//         subjects: ['maths', 'english', 'cad'],
//         teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
//         results: {maths: 90, english: 75, cad: 87},
//     },
//     {
//         name: 'Emily',
//         subjects: ['science', 'maths','english', 'art'],
//         teacher: {science: 'Iris', maths: 'Harry', english: 'Joan', art: 'Simon'},
//         results: {science: 93, maths: 95, english: 80, art: 95},
//     },
//     {
//         name: 'Adam',
//         subjects: ['science', 'maths', 'art'],
//         teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
//         results: {science: 63, maths: 79, art: 95},
//     }
// ];

// const averagePoints = (arr, subject) => {
    
//     let sum = 0;
//     let counter = 0;
//     for (let student of arr) {
//         if (subject in student.results) {
//             sum += student.results[subject]
//             counter+=1
//             // return student.results[subject]
//         }
    
//     }
//     return sum/counter
    
// }

// let averageMarks = averagePoints(students, 'english')
// console.log(averageMarks)
// console.log(students[0].results['english'])

