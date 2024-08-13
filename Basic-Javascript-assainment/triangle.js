
// (area of triangle = 0.5 * base * height)

const base = Number(prompt("Please enter triangle base : "));
const height = Number(prompt("Please enter triangle height : "));

const triangleArea = 0.5 * (base * height);

document.getElementById('triangleArea').innerHTML = (`triangle area = ${triangleArea}`);


