let n = parseInt(prompt("Ingrese un número límite:"));

if (isNaN(n) || n <= 0) {
  alert("Por favor, ingrese un número válido.");
} else {
  let suma = 0;
  for (let i = 2; i <= n; i += 2) {
    suma += i;
  }
  alert("La suma de los números pares hasta " + n + " es: " + suma);
}
