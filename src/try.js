function generarNumeros() {
    // Los primeros tres números dados
    let numeros = [2023, 2024, 2025];
  
    // Continuar generando números hasta alcanzar un total de 10
    while (numeros.length < 10) {
      // Obtener los tres últimos números
      let ultimo1 = numeros[numeros.length - 3];
      let ultimo2 = numeros[numeros.length - 2];
      let ultimo3 = numeros[numeros.length - 1];
  
      // Sumar los tres últimos números para obtener el siguiente número
      let siguienteNumero = ultimo1 + ultimo2 + ultimo3;
      let ultimosCuatroDigitos = siguienteNumero % 10000
      // Agregar el nuevo número al array
      numeros.push(ultimosCuatroDigitos);
    }
  
    return numeros;
  }
  
  // Llamar a la función y mostrar el resultado en la consola
  console.log(generarNumeros());