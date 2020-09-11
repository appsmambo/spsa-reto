let primos = [];

for (let numero = 2; numero <= 1000; numero++) {
  if (esPrimo(numero)) {
    primos.push(numero);
    if (primos.length == 100) {
      console.log(primos);
      break;
    }
  }
}

function esPrimo(numero) {
  for (let divisor = 2; divisor < numero; divisor++) {
    if (numero % divisor === 0) {
      return false;
    }
  }
  return true;
}

