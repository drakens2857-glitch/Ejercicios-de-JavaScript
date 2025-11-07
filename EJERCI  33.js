let n = parseInt(prompt("Ingrese un número límite:"));

if (isNaN(n) || n <= 0) {
  alert("Por favor, ingrese un número válido.");
} else {
  let contador = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0) {
      contador++;
    }
  }
  alert("Hay " + contador + " múltiplos de 3 entre 1 y " + n + ".");
}
