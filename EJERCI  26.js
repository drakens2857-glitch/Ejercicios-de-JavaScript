let numero = parseInt(prompt("Ingrese un número para ver su tabla de multiplicar:"));

if (isNaN(numero)) {
  alert("Por favor, ingrese un número válido.");
} else {
  let tabla = "Tabla del " + numero + ":\n";
  for (let i = 1; i <= 10; i++) {
    tabla += numero + " x " + i + " = " + (numero * i) + "\n";
  }
  alert(tabla);
}
