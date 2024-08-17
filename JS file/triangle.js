 const base = Number(prompt("Triangle base number below"));
 const height = Number(prompt("Triangle height below"));

 const triangle =  0.5 * (base * height);

 document.getElementById('triangle').innerHTML = `Triangle area is: ${triangle}`