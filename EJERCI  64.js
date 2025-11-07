let lista = [5, 10, 15, 20, 25];
let valor = parseInt(prompt("Ingrese el número a eliminar:"));

if (isNaN(valor)) {
  alert("Por favor, ingrese un número válido.");
} else {
  let indice = lista.indexOf(valor);
  if (indice !== -1) {
    lista.splice(indice, 1);
    alert("Lista actualizada:\n" + lista.join(", "));
  } else {
    alert("El número no está en la lista.");
  }
}
