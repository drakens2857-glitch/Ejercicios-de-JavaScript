function filtrarPares(lista) {
  return lista.filter(num => num % 2 === 0);
}

let lista = [1, 2, 3, 4, 5, 6, 7, 8];
let pares = filtrarPares(lista);
alert("Números pares:\n" + pares.join(", "));
