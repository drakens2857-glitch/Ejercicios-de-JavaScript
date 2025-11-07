let numero = parseInt(prompt("Ingrese un número entero mayor que 1:"));

if (isNaN(numero) || numero <= 1) {
  alert("Por favor, ingrese un número válido mayor que 1.");
} else {
  let esPrimo = true;
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      esPrimo = false;
      break;
    }
  }
  alert("El número " + numero + (esPrimo ? " es primo." : " no es primo."));
}
