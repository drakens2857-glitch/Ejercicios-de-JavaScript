let numeros = [12, 45, 7, 89, 23];
let menor = numeros[0];

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] < menor) {
    menor = numeros[i];
  }
}

alert("El número menor es: " + menor);
