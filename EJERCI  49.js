let lista = [4, 8, 15, 23, 42];
let limite = parseInt(prompt("Ingrese el valor límite:"));

if (isNaN(limite)) {
  alert("Por favor, ingrese un número válido.");
} else {
  let filtrados = lista.filter(num => num > limite);
  alert("Números mayores a " + limite + ":\n" + filtrados.join(", "));
}
