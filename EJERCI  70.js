function calcularMediana(lista) {
  lista.sort((a, b) => a - b);
  let mitad = Math.floor(lista.length / 2);
  if (lista.length % 2 === 0) {
    return (lista[mitad - 1] + lista[mitad]) / 2;
  } else {
    return lista[mitad];
  }
}

let lista = [5, 2, 9, 1, 7];
let mediana = calcularMediana(lista);
alert("La mediana es: " + mediana);
