function esPar(numero) {
  return numero % 2 === 0;
}

let num = parseInt(prompt("Ingrese un número:"));

if (isNaN(num)) {
  alert("Por favor, ingrese un número válido.");
} else {
  alert("El número " + num + (esPar(num) ? " es par." : " no es par."));
}
