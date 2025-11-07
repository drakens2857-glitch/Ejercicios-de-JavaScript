function invertirCadena(texto) {
  return texto.split("").reverse().join("");
}

let entrada = prompt("Ingrese una palabra o frase:");

if (!entrada) {
  alert("Por favor, ingrese un texto.");
} else {
  alert("Texto invertido:\n" + invertirCadena(entrada));
}
