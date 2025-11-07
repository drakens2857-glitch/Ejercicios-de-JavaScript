function calcularDescuento(monto) {
  let descuento = 0;
  if (monto >= 500000) descuento = 20;
  else if (monto >= 200000) descuento = 10;
  else if (monto >= 100000) descuento = 5;
  return monto - (monto * descuento / 100);
}

let monto = parseFloat(prompt("Ingrese el monto de la compra:"));

if (isNaN(monto) || monto <= 0) {
  alert("Monto inválido.");
} else {
  let total = calcularDescuento(monto);
  alert("Total con descuento aplicado: $" + total.toFixed(2));
}
