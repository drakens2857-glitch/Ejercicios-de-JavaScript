function sumar(a, b) {
  return a + b;
}

let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));

if (isNaN(num1) || isNaN(num2)) {
  alert("Por favor, ingrese números válidos.");
} else {
  let resultado = sumar(num1, num2);
  alert("La suma es: " + resultado);
}
