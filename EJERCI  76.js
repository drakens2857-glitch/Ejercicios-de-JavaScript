function contarPalabras(frase) {
  let palabras = frase.trim().split(/\s+/);
  return palabras.length;
}

let texto = prompt("Ingrese una frase:");

if (!texto) {
  alert("Por favor, ingrese una frase.");
} else {
  alert("Cantidad de palabras: " + contarPalabras(texto));
}
