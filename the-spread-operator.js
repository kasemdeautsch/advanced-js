/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
let arr1 = [1,5,8]
let arr2 = arr1 // this array is not actually a copy of the first, it's a new variable which points to the same 
                // object as the other variable. Because of this,
                // anything we do to the second array will  be done to the first and vice versa.
arr2.push(4)
console.log('Second array', arr2) // The result is the same because both vars points to the same address in memory
console.log('First array', arr1)
console.log('----------------------')

// Copying an array
let arr3 = [7,8,9]
let arr4 = [...arr3]
arr4.push(4)
console.log('Third array', arr3)
console.log('Forth array', arr4)

console.log('----------------------')

// Copying an object
let obj1 = {a:1, b:2, c:3}
let obj2 = {...obj1, x:66}
let obj3 = {...obj1, b:5}
console.log('Obj1', obj1)
console.log('Obj2', obj2)
console.log('Obj3', obj3)

console.log('----------------------')

// Copying only part of an array/object
let arr5 = [...arr1, obj1, {...obj2}, 9 , 0, 'e', 'p']
console.log('arr5', arr5)
console.log('----------------------')

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
//         subjects: ['science', 'english', 'art'],
//         teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
//         results: {science: 93, english: 80, art: 95},
//     },
//     {
//         name: 'Adam',
//         subjects: ['science', 'maths', 'art'],
//         teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
//         results: {science: 63, maths: 87, art: 95},
//     }
// ];

// let subjects = [...students[0].subjects]
// // console.log(subjects)

// const update = (item, val) => [...item, val]

// let updatedSubjects = update(subjects, 'Electronics')
// console.log(updatedSubjects)
// console.log(subjects)