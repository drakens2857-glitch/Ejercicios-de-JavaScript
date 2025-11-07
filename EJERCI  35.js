let numero = prompt("Ingrese un número:");

if (isNaN(numero)) {
  alert("Por favor, ingrese un número válido.");
} else {
  let contador = 0;
  for (let i = 0; i < numero.length; i++) {
    let digito = parseInt(numero[i]);
    if (digito % 2 === 0) {
      contador++;
    }
  }
  alert("El número tiene " + contador + " dígitos pares.");
}
