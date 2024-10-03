// 1. Push Multiple Elements
let colors = ['red', 'blue'];
colors.push('green', 'yellow');
console.log(colors);

// 2.Shift Multiple Times

let fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
fruits.shift();
console.log(fruits); 

// 3.Unshift with Multiple Arguments

let sports = ['basketball', 'soccer'];
sports.unshift('tennis', 'baseball', 'cricket');
console.log(sports);

// 4.Find Non-Existing Element with indexOf()

let devices = ['Smartphone', 'Tablet', 'Laptop'];
let laptopIndex = devices.indexOf('Laptop');
console.log(`The index of "Laptop" is: ${laptopIndex}`);

// 5.Split String with Different Delimiter
const str = "HTML-CSS-JavaScript";
const array = str.split("-");
console.log(array);

// 6. Reverse Order of Array Using pop()

let originalArray = [10, 20, 30, 40];
let reversedArray = [];
while (originalArray.length > 0) {
    let element = originalArray.pop();
    reversedArray.push(element); 
}
console.log(reversedArray);

// 7. Joining Array Elements Without a Separator
