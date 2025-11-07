let a = parseInt(prompt("Ingrese el primer número:"));
let b = parseInt(prompt("Ingrese el segundo número:"));

function calcularMCD(x, y) {
  while (y !== 0) {
    let temp = y;
    y = x % y;
    x = temp;
  }
  return x;
}

function calcularMCM(x, y) {
  return (x * y) / calcularMCD(x, y);
}

if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
  alert("Por favor, ingrese dos números positivos válidos.");
} else {
  let mcd = calcularMCD(a, b);
  let mcm = calcularMCM(a, b);
  alert("MCD: " + mcd + "\nMCM: " + mcm);
}
