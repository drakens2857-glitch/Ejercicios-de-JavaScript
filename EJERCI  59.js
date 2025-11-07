function contarPares(lista) {
  let contador = 0;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] % 2 === 0) {
      contador++;
    }
  }
  return contador;
}

let lista = [2, 5, 8, 13, 20, 21];
alert("Cantidad de números pares: " + contarPares(lista));
