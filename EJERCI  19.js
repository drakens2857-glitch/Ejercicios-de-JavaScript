let capital = parseFloat(prompt("Ingrese el capital inicial:"));
let tasa = parseFloat(prompt("Ingrese la tasa de interés anual (%):"));
let tiempo = parseFloat(prompt("Ingrese el tiempo en años:"));

if (isNaN(capital) || isNaN(tasa) || isNaN(tiempo) || capital <= 0 || tasa < 0 || tiempo <= 0) {
  alert("Por favor, ingrese valores válidos.");
} else {
  let interes = (capital * tasa * tiempo) / 100;
  alert("El interés generado es: $" + interes.toFixed(2));
}
