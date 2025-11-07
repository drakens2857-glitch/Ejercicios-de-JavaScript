function estadoDelAgua(temp) {
  return temp <= 0 ? 'Sólido (hielo)' :
    temp >= 100 ? 'Gaseoso (vapor)' :
      'Líquido';
}

// Ejemplos
console.log(estadoDelAgua(-5));   // Sólido (hielo)
console.log(estadoDelAgua(25));   // Líquido
console.log(estadoDelAgua(100));  // Gaseoso (vapor)
console.log(estadoDelAgua(150));  // Gaseoso (vapor)