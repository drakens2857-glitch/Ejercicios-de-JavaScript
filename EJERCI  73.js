function generarAleatorios(cantidad) {
  let lista = [];
  for (let i = 0; i < cantidad; i++) {
    lista.push(Math.floor(Math.random() * 100) + 1);
  }
  return lista;
}

let n = parseInt(prompt("¿Cuántos números aleatorios desea generar?"));

if (isNaN(n) || n <= 0) {
  alert("Por favor, ingrese una cantidad válida.");
} else {
  let resultado = generarAleatorios(n);
  alert("Números generados:\n" + resultado.join(", "));
}
