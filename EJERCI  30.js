let n = parseInt(prompt("Ingrese un número límite:"));

if (isNaN(n) || n <= 0) {
  alert("Por favor, ingrese un número válido.");
} else {
  let pares = "Números pares hasta " + n + ":\n";
  for (let i = 2; i <= n; i += 2) {
    pares += i + " ";
  }
  alert(pares);
}
