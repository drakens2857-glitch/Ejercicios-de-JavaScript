function convertirTemperatura(valor, escala) {
  if (escala === "C") {
    return (valor * 9/5) + 32; // Celsius a Fahrenheit
  } else {
    return (valor - 32) * 5/9; // Fahrenheit a Celsius
  }
}

let escala = prompt("¿Convertir desde Celsius (C) o Fahrenheit (F)?").toUpperCase();
let valor = parseFloat(prompt("Ingrese la temperatura:"));

if (isNaN(valor) || (escala !== "C" && escala !== "F")) {
  alert("Datos inválidos.");
} else {
  let resultado = convertirTemperatura(valor, escala);
  alert("Temperatura convertida: " + resultado.toFixed(2) + (escala === "C" ? " °F" : " °C"));
}
