function obtenerDescuento(edad) {
  return edad < 12 ? '50% de descuento' :
    edad >= 65 ? '30% de descuento' :
      edad >= 12 && edad < 65 ? '10% de descuento' :
        'Edad inválida';
}

// Ejemplos
console.log(obtenerDescuento(8));   // 50% de descuento (niño)
console.log(obtenerDescuento(30));  // 10% de descuento (adulto)
console.log(obtenerDescuento(70));  // 30% de descuento (mayor)
