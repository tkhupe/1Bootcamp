/***********************************************************************

Write a function  `uniqueKeys` that accepts two objects and returns an array of
keys that are present in the first object but not in both objects.

Examples:

const cat = { legs: 4, favoriteFood: 'catnip', cuteness: 100, sound: 'meow'};
const human = { legs: 4, favoriteFood: 'sushi', money: 0};
uniqueKeys(cat, human); // ['cuteness', 'sound']

const guitar = { strings: 4, volume: 11, color: 'blue' };
const drums = { volume: 8, color: 'red' };
uniqueKeys(guitar, drums); // ['strings']
***********************************************************************/

function uniqueKeys(obj1, obj2) {
    obj1.keys.obj
//     let arr = [];
//     for (key in obj1) {
//         if (obj1[key] !== undefined && obj2[key] === undefined ||
//             obj1[key] == undefined && obj2[key] !== undefined) {
//                 arr.push(key)

//         }
//     }
//     return arr,
//     // Your code here
// }

//const keysInObject = (obj) => Object.keys(obj);
const cat = { legs: 4, favoriteFood: 'catnip', cuteness: 100, sound: 'meow'};
const human = { legs: 4, favoriteFood: 'sushi', money: 0};
console.log(uniqueKeys(cat, human)); // ['cuteness', 'sound']

const guitar = { strings: 4, volume: 11, color: 'blue' };
const drums = { volume: 8, color: 'red' };
console.log(uniqueKeys(guitar, drums)); // ['strings']

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = uniqueKeys;
