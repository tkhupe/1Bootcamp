/***********************************************************************
Write a function, `catchZs` that takes in an arbitrary number of words,
and return the total amount of times that the character "z" either starts
or ends a word.

Examples:

catchZs("fizz", "buzz"); // 2
catchZs("time", "to", "go", "to", "the", "zoo"); // 1
catchZs("Zip", "Zap", "Zop"); // 3
catchZs("pizza"); // 0
catchZs("Zzzzzz"); // 2
***********************************************************************/

// Your code here
const catchZs = (...words) => {
    let count = 0;
    if (words[0].includes('z') || words[words.length - 1].includes('z')) {
        count++
     }
     return count
}

console.log(catchZs("fizz", "buzz")); // 2
console.log(catchZs("time", "to", "go", "to", "the", "zoo")); // 1
console.log(catchZs("Zip", "Zap", "Zop")); // 3
console.log(catchZs("pizza")); // 0
console.log(catchZs("Zzzzzz")); // 2

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = catchZs;
} catch(e) {
    module.exports = null;
}
