let inicio = parseInt(prompt("Ingrese el número inicial:"));
let fin = parseInt(prompt("Ingrese el número final:"));

if (isNaN(inicio) || isNaN(fin) || inicio > fin) {
  alert("Por favor, ingrese un rango válido.");
} else {
  let resultado = "";
  for (let i = inicio; i <= fin; i++) {
    if (i % 2 === 0) {
      resultado += i + " ";
    }
  }
  alert("Números pares entre " + inicio + " y " + fin + ":\n" + resultado);
}
