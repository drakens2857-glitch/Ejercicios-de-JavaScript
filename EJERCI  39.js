let limite = parseInt(prompt("Ingrese el número límite:"));

if (isNaN(limite) || limite <= 0) {
  alert("Por favor, ingrese un número válido.");
} else {
  let patron = "";
  for (let i = 1; i <= limite; i++) {
    patron += (i + " ").repeat(i) + "\n";
  }
  alert(patron);
}
