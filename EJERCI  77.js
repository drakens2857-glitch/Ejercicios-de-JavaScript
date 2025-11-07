function contarCaracteres(frase) {
  return frase.replace(/\s/g, "").length;
}

let texto = prompt("Ingrese una frase:");

if (!texto) {
  alert("Por favor, ingrese una frase.");
} else {
  alert("Cantidad de caracteres (sin espacios): " + contarCaracteres(texto));
}
