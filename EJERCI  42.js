let n = parseInt(prompt("Ingrese un número límite:"));

if (isNaN(n) || n <= 0) {
  alert("Por favor, ingrese un número válido.");
} else {
  let resultado = "";
  for (let i = n; i >= 1; i--) {
    resultado += i + " ";
  }
  alert("Números del " + n + " al 1:\n" + resultado);
}
