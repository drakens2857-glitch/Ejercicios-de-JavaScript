function esPalindromo(texto) {
  let limpio = texto.toLowerCase().replace(/[^a-z0-9]/g, "");
  let invertido = limpio.split("").reverse().join("");
  return limpio === invertido;
}

let entrada = prompt("Ingrese una palabra o frase:");

if (!entrada) {
  alert("Por favor, ingrese un texto.");
} else {
  alert(esPalindromo(entrada) ? "Es un palíndromo." : "No es un palíndromo.");
}
