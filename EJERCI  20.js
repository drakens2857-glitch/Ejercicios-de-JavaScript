let inicio = parseInt(prompt("Ingrese el número inicial:"));
let fin = parseInt(prompt("Ingrese el número final:"));
let paso = parseInt(prompt("Ingrese el paso (incremento):"));

if (isNaN(inicio) || isNaN(fin) || isNaN(paso) || paso <= 0) {
  alert("Por favor, ingrese valores válidos.");
} else {
  let secuencia = "";
  for (let i = inicio; i <= fin; i += paso) {
    secuencia += i + " ";
  }
  alert("Secuencia generada:\n" + secuencia);
}
