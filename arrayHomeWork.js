
1.
 const train_departures = [10, 15, 7, 20, 5];
const earliestDeparture = Math.min(...train_departures);

console.log(`The earliest train departs at ${earliestDeparture}:00`);

2.
const seats = [1, 0, 1, 1, 0, 0, 1, 0];

// Initialize a counter
let availableSeatsCount = 0;

// Iterate through the array
for (let i = 0; i < seats.length; i++) {
  if (seats[i] === 0) {
    availableSeatsCount++;
  }
}

console.log(`Total number of available seats: ${availableSeatsCount}`);


3.

const soldiers = [120, 300, 250, 180, 150];

// Initialize variables for the maximum value and its index
let maxSoldiers = soldiers[0];
let regionIndex = 0;

Loopthroughthearray
for (let i = 1; i < soldiers.length; i++) {
  if (soldiers[i] > maxSoldiers) {
    maxSoldiers = soldiers[i];
    regionIndex = i;
  }
}

console.log(`The region with the highest number of soldiers has ${maxSoldiers} soldiers (Region ${regionIndex + 1})`);


4.
const populations = [50, 60, 70, 80, 90];

// Calculate the sum of all the populations
const sum = populations.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Calculate the average population
const average = sum / populations.length;

// Output the average population
console.log("The average population is:", average);