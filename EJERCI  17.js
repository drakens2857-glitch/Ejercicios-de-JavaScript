let opcion = prompt("¿Qué desea calcular? (velocidad, distancia, tiempo)").toLowerCase();

if (opcion === "velocidad") {
  let distancia = parseFloat(prompt("Ingrese la distancia (km):"));
  let tiempo = parseFloat(prompt("Ingrese el tiempo (horas):"));
  if (tiempo > 0) {
    let velocidad = distancia / tiempo;
    alert("La velocidad es: " + velocidad.toFixed(2) + " km/h");
  } else {
    alert("El tiempo debe ser mayor que cero.");
  }
} else if (opcion === "distancia") {
  let velocidad = parseFloat(prompt("Ingrese la velocidad (km/h):"));
  let tiempo = parseFloat(prompt("Ingrese el tiempo (horas):"));
  let distancia = velocidad * tiempo;
  alert("La distancia es: " + distancia.toFixed(2) + " km");
} else if (opcion === "tiempo") {
  let distancia = parseFloat(prompt("Ingrese la distancia (km):"));
  let velocidad = parseFloat(prompt("Ingrese la velocidad (km/h):"));
  if (velocidad > 0) {
    let tiempo = distancia / velocidad;
    alert("El tiempo es: " + tiempo.toFixed(2) + " horas");
  } else {
    alert("La velocidad debe ser mayor que cero.");
  }
} else {
  alert("Opción inválida.");
}
