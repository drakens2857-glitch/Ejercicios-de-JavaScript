function algunNegativo(lista) {
  return lista.some(num => num < 0);
}

let lista = [4, -2, 7, 0];
alert(algunNegativo(lista) ? "Hay al menos un número negativo." : "Todos los números son cero o positivos.");
