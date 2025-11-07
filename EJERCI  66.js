function eliminarDuplicados(lista) {
  return [...new Set(lista)];
}

let lista = [1, 2, 2, 3, 4, 4, 5];
let resultado = eliminarDuplicados(lista);
alert("Lista sin duplicados:\n" + resultado.join(", "));
