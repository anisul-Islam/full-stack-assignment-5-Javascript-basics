function triangle() {
  let base = parseFloat(prompt("Please enter base of your area: "));

  let height = parseFloat(prompt("Please enter height of your area: "));

  let triangle = (0.5 * base * height).toFixed(2);
  document.write(
    `Area of Triangle = 0.5 &times; Base &times; Height<br>
  Base: ${base}<br>
   Height: ${height}<br>
   Area of Triangle: ${triangle}`
  );
}
