function filtrarImpares(lista) {
  return lista.filter(num => num % 2 !== 0);
}

let lista = [1, 2, 3, 4, 5, 6, 7, 8];
let impares = filtrarImpares(lista);
alert("Números impares:\n" + impares.join(", "));
