let n = parseInt(prompt("Ingrese un número límite:"));

if (isNaN(n) || n <= 0) {
  alert("Por favor, ingrese un número válido.");
} else {
  let resultado = "";
  for (let i = 1; i <= n; i++) {
    resultado += i + " ";
  }
  alert("Números del 1 al " + n + ":\n" + resultado);
}
