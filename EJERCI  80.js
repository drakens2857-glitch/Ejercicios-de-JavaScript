function contarLetrasYNumeros(texto) {
  let letras = 0;
  let numeros = 0;
  for (let i = 0; i < texto.length; i++) {
    let char = texto[i];
    if (/[a-zA-Z]/.test(char)) {
      letras++;
    } else if (/[0-9]/.test(char)) {
      numeros++;
    }
  }
  return { letras, numeros };
}

let entrada = prompt("Ingrese una cadena:");

if (!entrada) {
  alert("Por favor, ingrese un texto.");
} else {
  let resultado = contarLetrasYNumeros(entrada);
  alert("Letras: " + resultado.letras + "\nNúmeros: " + resultado.numeros);
}
