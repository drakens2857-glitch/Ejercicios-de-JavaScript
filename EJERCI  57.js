function esPrimo(numero) {
  if (numero <= 1) return false;
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) return false;
  }
  return true;
}

let num = parseInt(prompt("Ingrese un número:"));

if (isNaN(num)) {
  alert("Por favor, ingrese un número válido.");
} else {
  alert("El número " + num + (esPrimo(num) ? " es primo." : " no es primo."));
}
