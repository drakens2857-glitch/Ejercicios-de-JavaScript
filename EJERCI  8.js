let totalCuenta = parseFloat(prompt("Ingrese el total de la cuenta:"));
let porcentaje = parseInt(prompt("Ingrese el porcentaje de propina (10, 15, 20):"));

if (isNaN(totalCuenta) || isNaN(porcentaje) || totalCuenta <= 0 || porcentaje <= 0) {
  alert("Por favor, ingrese valores válidos.");
} else {
  let propina = (totalCuenta * porcentaje) / 100;
  let totalFinal = totalCuenta + propina;

  alert("Propina: $" + propina.toFixed(2) + "\nTotal a pagar: $" + totalFinal.toFixed(2));
}
