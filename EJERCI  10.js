let año = parseInt(prompt("Ingrese un año:"));

if (isNaN(año) || año <= 0) {
  alert("Por favor, ingrese un año válido.");
} else if ((año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0)) {
  alert("El año " + año + " es bisiesto.");
} else {
  alert("El año " + año + " no es bisiesto.");
}
