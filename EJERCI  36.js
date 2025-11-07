let numero = parseInt(prompt("Ingrese un número:"));

if (isNaN(numero)) {
  alert("Por favor, ingrese un número válido.");
} else if (numero % 2 === 0 && numero % 3 === 0) {
  alert("El número es múltiplo de 2 y de 3.");
} else if (numero % 2 === 0) {
  alert("El número es múltiplo de 2.");
} else if (numero % 3 === 0) {
  alert("El número es múltiplo de 3.");
} else {
  alert("El número no es múltiplo de 2 ni de 3.");
}
