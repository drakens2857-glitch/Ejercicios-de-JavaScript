let numero = prompt("Ingrese un número entero:");

if (isNaN(numero)) {
  alert("Por favor, ingrese un número válido.");
} else {
  let suma = 0;
  let cantidad = numero.length;
  for (let i = 0; i < cantidad; i++) {
    suma += parseInt(numero[i]);
  }
  alert("Cantidad de dígitos: " + cantidad + "\nSuma de dígitos: " + suma);
}
