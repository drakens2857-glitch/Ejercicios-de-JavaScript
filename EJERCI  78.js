function capitalizar(frase) {
  return frase
    .toLowerCase()
    .split(" ")
    .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
    .join(" ");
}

let texto = prompt("Ingrese una frase:");

if (!texto) {
  alert("Por favor, ingrese una frase.");
} else {
  alert("Frase capitalizada:\n" + capitalizar(texto));
}
