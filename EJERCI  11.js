let precioOriginal = parseFloat(prompt("Ingrese el precio original:"));
let descuento = parseFloat(prompt("Ingrese el porcentaje de descuento:"));

if (isNaN(precioOriginal) || isNaN(descuento) || precioOriginal <= 0 || descuento < 0) {
  alert("Por favor, ingrese valores válidos.");
} else {
  let montoDescuento = (precioOriginal * descuento) / 100;
  let precioFinal = precioOriginal - montoDescuento;
  alert("Precio final con descuento: $" + precioFinal.toFixed(2));
}
