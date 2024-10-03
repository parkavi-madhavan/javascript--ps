// Input year
let exampleYear = 2025; // You can change this value to test other years

// Check if the year is a leap year
if (exampleYear % 4 === 0) {
    console.log("Y"); // It's a leap year
}
 else if(exampleYear % 400 === 0) {
    console.log("Y"); // It's a common year
}
else{
    console.log("N")
}
