function clasificarTriangulo(a, b, c) {
  return a === b && b === c ? 'Equilátero' :
    a === b || b === c || a === c ? 'Isósceles' :
      'Escaleno';
}

// Ejemplos
console.log(clasificarTriangulo(5, 5, 5)); // Equilátero
console.log(clasificarTriangulo(5, 5, 3)); // Isósceles
console.log(clasificarTriangulo(4, 5, 6)); // Escaleno
