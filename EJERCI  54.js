let numeros = [10, 20, 30, 40, 50];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
  suma += numeros[i];
}

let promedio = suma / numeros.length;
let contador = 0;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > promedio) {
    contador++;
  }
}

alert("Hay " + contador + " números mayores que el promedio.");
