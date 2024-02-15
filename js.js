function generarNumeroSecreto() {
  return Math.floor(Math.random() * 100) + 1;
}

function esNumeroValido(numero) {
  return !isNaN(numero) && numero >= 1 && numero <= 100;
}

function adivinaElNumero() {
  const numeroSecreto = generarNumeroSecreto();
  const numerosIngresados = [];

  function solicitarNumero() {
    let intento = prompt("Intenta adivinar el número secreto entre 1 y 100:");

    if (intento === null || intento.trim() === "") {
      console.log("Ingresa un número válido.");
      solicitarNumero();
      return;
    }

    intento = parseInt(intento);


    if (!esNumeroValido(intento)) {
      console.log("Ingresa un número válido entre 1 y 100.");
      solicitarNumero();
      return;
    }

    numerosIngresados.push(intento);

    if (intento === numeroSecreto) {
      console.log("Felicidades adivinaste!");
      console.log("Lista de números ingresados: " + numerosIngresados.join(", "));
    } else {
      console.log("El número secreto es incorrecto, vuelve a intentarlo.");
      solicitarNumero();
    }
  }

  solicitarNumero();
}

adivinaElNumero();
