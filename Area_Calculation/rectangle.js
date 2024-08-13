function rectangle() {
  let length = parseFloat(prompt("Please enter the length of the rectangle: "));
  let width = parseFloat(prompt("Please enter the width of the rectangle: "));

  let rectangle = (length * width).toFixed(2);

  document.writeln(`Area of Rectangle = Length&times;Width<br>
    Length: ${length}<br>
    Width:${width}<br>
    Area of Rectangle: ${rectangle}`);
}
