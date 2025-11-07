let opcion = prompt("Seleccione una opción:\n1. Kilómetros a millas\n2. Millas a kilómetros");
let valor = parseFloat(prompt("Ingrese el valor a convertir:"));
let resultado;

switch (opcion) {
  case "1":
    resultado = valor * 0.621371;
    alert(valor + " km son " + resultado.toFixed(2) + " millas.");
    break;
  case "2":
    resultado = valor / 0.621371;
    alert(valor + " millas son " + resultado.toFixed(2) + " km.");
    break;
  default:
    alert("Opción inválida.");
}
