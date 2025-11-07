function factorial(n) {
  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

let num = parseInt(prompt("Ingrese un número entero positivo:"));

if (isNaN(num) || num < 0) {
  alert("Por favor, ingrese un número válido.");
} else {
  alert("El factorial de " + num + " es: " + factorial(num));
}
