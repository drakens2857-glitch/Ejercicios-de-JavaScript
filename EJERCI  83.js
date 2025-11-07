function separarParesImpares(lista) {
  let pares = [], impares = [];
  for (let num of lista) {
    if (num % 2 === 0) pares.push(num);
    else impares.push(num);
  }
  return { pares, impares };
}

let lista = [1, 2, 3, 4, 5, 6, 7];
let resultado = separarParesImpares(lista);
alert("Pares: " + resultado.pares.join(", ") + "\nImpares: " + resultado.impares.join(", "));
