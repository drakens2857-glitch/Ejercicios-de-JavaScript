function obtenerCalificacion(puntaje) {
  return puntaje >= 90 ? 'A' :
    puntaje >= 80 ? 'B' :
      puntaje >= 70 ? 'C' :
        puntaje >= 60 ? 'D' : 'F';
}

// Ejemplos
console.log(obtenerCalificacion(95)); // A
console.log(obtenerCalificacion(82)); // B
console.log(obtenerCalificacion(74)); // C
console.log(obtenerCalificacion(61)); // D
console.log(obtenerCalificacion(50)); // F
