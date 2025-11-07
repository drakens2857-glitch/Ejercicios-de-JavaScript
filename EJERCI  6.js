let peso = parseFloat(prompt("Ingrese su peso en kilogramos:"));
let altura = parseFloat(prompt("Ingrese su altura en metros:"));

if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
  alert("Por favor, ingrese valores válidos y positivos.");
} else {
  let imc = peso / (altura * altura);
  let clasificacion;

  if (imc < 18.5) {
    clasificacion = "Bajo peso";
  } else if (imc < 24.9) {
    clasificacion = "Peso normal";
  } else if (imc < 29.9) {
    clasificacion = "Sobrepeso";
  } else {
    clasificacion = "Obesidad";
  }

  alert("Su IMC es: " + imc.toFixed(2) + " (" + clasificacion + ")");
}
