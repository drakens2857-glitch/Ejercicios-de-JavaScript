function todosPositivos(lista) {
  return lista.every(num => num > 0);
}

let lista = [3, 5, 7, 9];
alert(todosPositivos(lista) ? "Todos los números son positivos." : "Hay al menos un número no positivo.");
