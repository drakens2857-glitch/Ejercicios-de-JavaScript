function filtrarNegativos(lista) {
  return lista.filter(num => num < 0);
}

let lista = [5, -3, 12, -7, 0, 8];
let negativos = filtrarNegativos(lista);
alert("Números negativos:\n" + negativos.join(", "));
