let lista = [10, 20, 30, 40, 50];
let valor = parseInt(prompt("Ingrese el número a buscar:"));

if (isNaN(valor)) {
  alert("Por favor, ingrese un número válido.");
} else {
  let indice = lista.indexOf(valor);
  if (indice !== -1) {
    alert("El número se encuentra en la posición: " + indice);
  } else {
    alert("El número no está en la lista.");
  }
}
