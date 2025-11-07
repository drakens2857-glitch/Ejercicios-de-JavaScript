let numero = prompt("Ingrese un número:");

if (isNaN(numero)) {
  alert("Por favor, ingrese un número válido.");
} else {
  let sumaPares = 0;
  let sumaImpares = 0;
  for (let i = 0; i < numero.length; i++) {
    let digito = parseInt(numero[i]);
    if (digito % 2 === 0) {
      sumaPares += digito;
    } else {
      sumaImpares += digito;
    }
  }
  alert("Suma de pares: " + sumaPares + "\nSuma de impares: " + sumaImpares);
}
