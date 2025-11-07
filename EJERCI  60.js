function esPrimo(n) {
  if (n <= 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function filtrarPrimos(lista) {
  return lista.filter(num => esPrimo(num));
}

let lista = [3, 4, 5, 6, 7, 8, 9, 10, 11];
let primos = filtrarPrimos(lista);
alert("Números primos en la lista:\n" + primos.join(", "));
