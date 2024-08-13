function circle() {
  let radius = parseFloat(prompt("Please Enter the Radius of Your Area: "));

  let areaOfcircle = (Math.PI * radius * radius).toFixed(2);

  document.writeln(`Area of Circle = 3.1416 &times; Radius &times; Radius <br>
    Radius: ${radius}<br>
    Area of Circle: ${areaOfcircle}`);
}
