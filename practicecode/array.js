1.// Given the array train_departures = [10, 15, 7, 20, 5], where each element represents the departure time of a train in 24-hour format, find the earliest train to depart.
let  train_departures = [10, 15, 7, 20, 5];

let earliestDeparture = Math.min(...train_departures);

console.log(`The earliest train departs at: ${earliestDeparture}:00`);

// 2.Given the array seats = [1, 0, 1, 1, 0, 0, 1, 0], where 1 means a seat is booked and 0 means a seat is available, count the total number of available seats

let  seats = [1, 0, 1, 1, 0, 0, 1, 0];

let  availableSeatsCount = seats.filter(seat => seat === 0).length;

console.log(`Total number of available seats: ${availableSeatsCount}`);

// 3.Given the array soldiers = [120, 300, 250, 180, 150], where each element represents the number of soldiers assigned to different regions, find the region with the highest number of soldiers.


let marks = 85;
if (marks > 75) {
   console.log("You have got an A grade");
}


let day = 4;
switch (day) {
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    case 7:
        console.log("Today is Sunday");
        break;
    default:
        console.log("Invalid day");
        break;
}