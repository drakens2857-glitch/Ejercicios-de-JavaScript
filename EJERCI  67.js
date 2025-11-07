function contarFrecuencia(lista, valor) {
  let contador = 0;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === valor) {
      contador++;
    }
  }
  return contador;
}

let lista = [1, 2, 2, 3, 4, 2, 5];
let valor = parseInt(prompt("Ingrese el número a contar:"));
let frecuencia = contarFrecuencia(lista, valor);
alert("El número " + valor + " aparece " + frecuencia + " veces.");
