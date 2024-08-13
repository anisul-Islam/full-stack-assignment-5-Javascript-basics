// (area of rectangle = length*width)

const width = Number(prompt("please Enter rectangle width : "));
const length = Number(prompt("please Enter rectangle length : "));

const rectangleArea = length * width ;
document.getElementById("rectangleArea").innerHTML = (`rectangle area = ${rectangleArea}`);