let opcion = prompt("Seleccione una opción:\n1. Saludar\n2. Mostrar fecha\n3. Salir");

switch (opcion) {
  case "1":
    alert("¡Hola! Bienvenido.");
    break;
  case "2":
    let fecha = new Date();
    alert("La fecha actual es: " + fecha.toLocaleDateString());
    break;
  case "3":
    alert("Saliendo del programa...");
    break;
  default:
    alert("Opción inválida.");
}
