function calcularMCD(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function calcularMCM(a, b) {
  return (a * b) / calcularMCD(a, b);
}

let num1 = parseInt(prompt("Ingrese el primer número:"));
let num2 = parseInt(prompt("Ingrese el segundo número:"));

if (isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0) {
  alert("Por favor, ingrese dos números positivos válidos.");
} else {
  alert("El MCM es: " + calcularMCM(num1, num2));
}
