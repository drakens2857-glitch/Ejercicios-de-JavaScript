let n = parseInt(prompt("¿Cuántos números desea sumar?"));

if (isNaN(n) || n <= 0) {
  alert("Por favor, ingrese un número entero positivo.");
} else {
  let suma = 0;
  for (let i = 1; i <= n; i++) {
    suma += i;
  }
  alert("La suma de los primeros " + n + " números es: " + suma);
}
