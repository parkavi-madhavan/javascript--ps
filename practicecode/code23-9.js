
calculateArea();
greetUser();

function calculateArea() {
 const radius = 5;
 
 var area = Math.PI * radius * radius;
 console.log(area);
}
function greetUser() {
  var userName = "John";
 console.log(userName);
 
}



// 2.
let count = 1;
while (count <= 100) {
 console.log("Counting down: " + count);
 count = count + 1;
}

// 3.
let temperature = 30;
if (temperature = 20) {
    console.log("It's cold outside.");
   } 
   else {
    console.log("It's warm outside.");
   }

//    4.
  

// 5.
function sumNumber(n){
  let sum=0;
  let i=1;
  while(i<=n){
    sum+=i;
    i++; 

  }
  return sum;
}
console.log(sumNumber(5));

// 6.
 function calculateFactorial(n) {
   if(n<0){
     return "Factorial is not defined for negative numbers."
  }
   let Factorial=1;
   let i=n;
  while (i>0){
    Factorial*=i;
    i--;
 }
   return Factorial;
 }
 calculateFactorial(5)
 

7.

function printEvenNumbers(n) {
 
  if (n < 1) {
      console.log("Please enter a number greater than or equal to 1.");
      return;
  }

  let i = 1; 

  console.log(`Even numbers from 1 to ${n}:`);
  
  while (i <= n) {
      if (i % 2 === 0) { 
          console.log(i); 
      }
      i++; 
  }
}


const n = 20; 
printEvenNumbers(n);

8.
function sumNumbers(n) {
  let sum = 0;
  let i = 1; 
  while (i <= n) { 
      sum += i; 
      i++; 
  }
  return sum;
}
const n1 = 5; 
const result = sumNumbers(n);
console.log(`The sum of numbers from 1 to ${n} is: ${result}`);

9.
function classifyNumber(num) {
    if (num % 3 === 0 && num % 5 === 0) {
       return "Divisible by both 3 and 5";
  } else if (num % 3 === 0) {
       return "Divisible by 3";
   } else if (num % 5 === 0) {
       return "Divisible by 5";
  } else {
       return "Not divisible by 3 or 5";
   }
 }
 console.log(classifyNumber(15)); 
 console.log(classifyNumber(9));  
 console.log(classifyNumber(10));
 console.log(classifyNumber(7));  
10.
function getDayName(dayNumber) {
  switch (dayNumber) {
      case 1:
          return "Sunday";
      case 2:
          return "Monday";
      case 3:
          return "Tuesday";
      case 4:
          return "Wednesday";
      case 5:
          return "Thursday";
      case 6:
          return "Friday";
      case 7:
          return "Saturday";
      default:
          return "Invalid input! Please enter a number between 1 and 7.";
  }
}
console.log(getDayName(1)); 
console.log(getDayName(4)); 
console.log(getDayName(7)); 
console.log(getDayName(10));
11.
function printMultiplicationTable(n, r) {
  for (let i = r; i >= 1; i--) {
      let result = n * i;
      console.log(`${n} * ${i} = ${result}`);
  }
}


let n2= 5;
let r = 6; 
printMultiplicationTable(n, r);
12.
function robotLaps() {
  let lapCount = 0; 
  const totalLaps = 10; 

  while (lapCount < totalLaps) {
      lapCount++;
      console.log(`Lap ${lapCount} completed!`); 
  }

  console.log("Robot has completed all laps!");
}


robotLaps();
13.
function simulateRobotMovement() {
  let batteryLevel = 100; 

  console.log("Robot starting...");

  while (batteryLevel > 20) {
      console.log(`Battery level: ${batteryLevel}% - Robot is moving forward.`);
      batteryLevel -= 5; 
  }

  console.log(`Battery level: ${batteryLevel}% - Robot cannot move anymore.`);
  console.log("Battery is low.");
}

simulateRobotMovement();
// 14.
 function moveRobot() {
   let position = { x: 0, y: 0 };

  
 const printPosition = () => {
       console.log(`Robot's current position: (${position.x}, ${position.y})`);
   };

  
   const directions = ["North", "South", "East", "West"];

  
  directions.forEach(direction => {
      console.log(`Moving ${direction}...`);
      
      switch (direction) {
          case "North":
              position.y += 1; 
              break;
          case "South":
              position.y -= 1; 
              break;
          case "East":
              position.x += 1; 
              break;
          case "West":
              position.x -= 1; 
              break;
          default:
              console.log("Invalid direction.");
              break;
      }

      printPosition();
  });
}


moveRobot();

15.
/* function simulateFlight() {
  let altitude = 1000; 
  console.log(`Initial altitude: ${altitude} ft`);

  const interval = setInterval(() => {
      altitude -= 10; 
      console.log(`Current altitude: ${altitude} ft`);

      if (altitude <= 0) {
          clearInterval(interval);
          console.log("Flight arrived");
      }
  }, 1000); 
}

simulateFlight(); */
 16.
function assignRunway(destination) {
  let runway;

  switch (destination.toLowerCase()) {
      case 'new york':
          runway = 'Runway 1';
          break;
      case 'los angeles':
          runway = 'Runway 2';
          break;
      case 'chicago':
          runway = 'Runway 3';
          break;
      case 'miami':
          runway = 'Runway 4';
          break;
      case 'dallas':
          runway = 'Runway 5';
          break;
      default:
          runway = 'No designated runway for this destination.';
  }

  return runway;
}
const destination = prompt("Enter the flight destination:");
const assignedRunway = assignRunway(destination);
console.log(`The assigned runway for ${destination} is: ${assignedRunway}`);
 





