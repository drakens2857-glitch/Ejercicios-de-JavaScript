let filas = parseInt(prompt("Ingrese el número de filas:"));

if (isNaN(filas) || filas <= 0) {
  alert("Por favor, ingrese un número válido.");
} else {
  let patron = "";
  for (let i = 1; i <= filas; i++) {
    for (let j = 1; j <= i; j++) {
      patron += j + " ";
    }
    patron += "\n";
  }
  alert(patron);
}
