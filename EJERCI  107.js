function tipoDeDia(dia) {
  return dia === 'sábado' || dia === 'domingo' ? 'Fin de semana' :
    dia === 'lunes' || dia === 'martes' || dia === 'miércoles' ||
      dia === 'jueves' || dia === 'viernes' ? 'Laboral' :
      'Día inválido';
}

// Ejemplos
console.log(tipoDeDia('lunes'));     // Laboral
console.log(tipoDeDia('sábado'));    // Fin de semana
console.log(tipoDeDia('domingo'));   // Fin de semana
console.log(tipoDeDia('miércoles')); // Laboral
console.log(tipoDeDia('feriado'));   // Día inválido
