const width = Number(prompt("Enter the rectangle's width below"));
const length = Number(prompt("Enter the rectangle's height below"));

const rectangle = width * height;

document.getElementById('rectangle').innerHTML = `Rectanlge area is: ${rectangle}`