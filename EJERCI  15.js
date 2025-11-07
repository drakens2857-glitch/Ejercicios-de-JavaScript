let numero = prompt("Ingrese un número:");

if (isNaN(numero)) {
  alert("Por favor, ingrese un número válido.");
} else {
  let suma = 0;
  for (let i = 0; i < numero.length; i++) {
    suma += parseInt(numero[i]);
  }
  alert("La suma de los dígitos es: " + suma);
}
