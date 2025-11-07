function esBisiesto(anio) {
  return (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);
}

let entrada = parseInt(prompt("Ingrese un año:"));

if (isNaN(entrada) || entrada <= 0) {
  alert("Por favor, ingrese un año válido.");
} else {
  alert(esBisiesto(entrada) ? "Es un año bisiesto." : "No es un año bisiesto.");
}
