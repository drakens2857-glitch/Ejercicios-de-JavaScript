let nota = parseInt(prompt("Ingrese su calificación (0-100):"));
let letra;

if (isNaN(nota) || nota < 0 || nota > 100) {
  alert("Calificación inválida.");
} else {
  switch (true) {
    case (nota >= 90):
      letra = "A";
      break;
    case (nota >= 80):
      letra = "B";
      break;
    case (nota >= 70):
      letra = "C";
      break;
    case (nota >= 60):
      letra = "D";
      break;
    default:
      letra = "F";
  }
  alert("Tu calificación es: " + letra);
}
