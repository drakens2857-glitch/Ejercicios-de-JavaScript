let filas = parseInt(prompt("¿Cuántas filas de asteriscos desea?"));

if (isNaN(filas) || filas <= 0) {
  alert("Por favor, ingrese un número válido.");
} else {
  let patron = "";
  for (let i = 1; i <= filas; i++) {
    patron += "*".repeat(i) + "\n";
  }
  alert(patron);
}
