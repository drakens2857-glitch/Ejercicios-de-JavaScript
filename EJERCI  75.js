function contarVocales(texto) {
  let contador = 0;
  let vocales = "aeiouAEIOU";
  for (let i = 0; i < texto.length; i++) {
    if (vocales.includes(texto[i])) {
      contador++;
    }
  }
  return contador;
}

let entrada = prompt("Ingrese una palabra o frase:");

if (!entrada) {
  alert("Por favor, ingrese un texto.");
} else {
  alert("Cantidad de vocales: " + contarVocales(entrada));
}
