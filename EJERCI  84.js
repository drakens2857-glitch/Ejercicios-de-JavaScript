function eliminarCeros(lista) {
  return lista.filter(num => num !== 0);
}

let lista = [0, 1, 2, 0, 3, 0, 4];
let resultado = eliminarCeros(lista);
alert("Lista sin ceros:\n" + resultado.join(", "));
