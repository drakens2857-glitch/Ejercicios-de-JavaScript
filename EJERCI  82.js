function contarSignos(lista) {
  let positivos = 0, negativos = 0, ceros = 0;
  for (let num of lista) {
    if (num > 0) positivos++;
    else if (num < 0) negativos++;
    else ceros++;
  }
  return { positivos, negativos, ceros };
}

let lista = [3, -1, 0, 7, -5, 0, 2];
let resultado = contarSignos(lista);
alert("Positivos: " + resultado.positivos + "\nNegativos: " + resultado.negativos + "\nCeros: " + resultado.ceros);
