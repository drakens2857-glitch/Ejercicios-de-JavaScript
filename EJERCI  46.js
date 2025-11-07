let n = parseInt(prompt("Ingrese un número límite:"));

if (isNaN(n) || n <= 0) {
  alert("Por favor, ingrese un número válido.");
} else {
  let lista = [];
  for (let i = 1; i <= n; i++) {
    lista.push(i);
  }
  alert("Lista generada:\n" + lista.join(", "));
}
