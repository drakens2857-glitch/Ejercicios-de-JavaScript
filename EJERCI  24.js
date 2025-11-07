let edad = parseInt(prompt("Ingrese su edad:"));
let categoria;

if (isNaN(edad) || edad < 0) {
  alert("Edad inválida.");
} else {
  switch (true) {
    case (edad < 13):
      categoria = "Niño";
      break;
    case (edad < 18):
      categoria = "Adolescente";
      break;
    case (edad < 60):
      categoria = "Adulto";
      break;
    default:
      categoria = "Adulto mayor";
  }
  alert("Categoría: " + categoria);
}
