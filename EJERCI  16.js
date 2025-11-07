let cantidad = parseInt(prompt("¿Cuántos números de Fibonacci deseas ver?"));

if (isNaN(cantidad) || cantidad <= 0) {
  alert("Por favor, ingrese un número válido mayor que 0.");
} else {
  let fibo = [0, 1];
  for (let i = 2; i < cantidad; i++) {
    fibo.push(fibo[i - 1] + fibo[i - 2]);
  }
  alert("Secuencia Fibonacci:\n" + fibo.slice(0, cantidad).join(", "));
}
