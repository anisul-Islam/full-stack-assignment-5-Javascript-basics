// (area of circle = 3.1416 * radius * radius)
const radius = Number(prompt("Please enter a circle radius : "));
const circleArea = 3.1416 * radius * radius;
document.getElementById("circleArea").innerHTML = (`Circle Area = ${circleArea}`);