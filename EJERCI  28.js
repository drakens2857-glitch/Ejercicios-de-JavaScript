let numero = parseInt(prompt("Ingrese un número para contar hacia atrás:"));

if (isNaN(numero) || numero <= 0) {
  alert("Por favor, ingrese un número entero positivo.");
} else {
  let conteo = "Contando hacia atrás:\n";
  for (let i = numero; i >= 1; i--) {
    conteo += i + "\n";
  }
  alert(conteo);
}
