let inicio = parseInt(prompt("Ingrese el número inicial:"));
let fin = parseInt(prompt("Ingrese el número final:"));

if (isNaN(inicio) || isNaN(fin) || inicio > fin) {
  alert("Por favor, ingrese un rango válido.");
} else {
  let suma = 0;
  for (let i = inicio; i <= fin; i++) {
    suma += i;
  }
  alert("La suma de los números entre " + inicio + " y " + fin + " es: " + suma);
}
