let lista = [5, 10, 15, 20, 25];
let numero = parseInt(prompt("Ingrese un número para buscar:"));

if (isNaN(numero)) {
  alert("Por favor, ingrese un número válido.");
} else {
  if (lista.includes(numero)) {
    alert("El número " + numero + " está en la lista.");
  } else {
    alert("El número " + numero + " no está en la lista.");
  }
}
