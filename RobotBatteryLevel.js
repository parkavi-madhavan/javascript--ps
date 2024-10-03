
let batteryLevel = 100;
while (batteryLevel > 20) {
    console.log(`Battery level: ${batteryLevel}% - Robot moves forward`);
    batteryLevel -= 5;
}
console.log("Battery is low");