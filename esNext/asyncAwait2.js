function gerarNumerosEntre(min, max, numerosProibidos) {
  if (min > max) {
    [max, min] = [min, max];
  }

  return new Promise((resolve, reject) => {
    const fator = max - min + 1;
    const aleatorio = parseInt(Math.random() * fator) + min;
    if (numerosProibidos.includes(aleatorio)) {
      reject("Numero repetido!");
    } else {
      resolve(aleatorio);
    }
  });
}

async function gerarMegaSena(qtDeNumeros, tentativas = 0) {
  try {
    const numeros = [];
    for (let _ of Array(qtDeNumeros).fill()) {
      numeros.push(await gerarNumerosEntre(1, 60, numeros));
    }
    return numeros;
  } catch (e) {
    if (tentativas > 10) {
      throw "Nao deu certo";
    } else {
      return gerarMegaSena(qtDeNumeros, tentativas + 1);
    }
  }
}

gerarNumerosEntre(1, 5, [1, 2, 4]).then(console.log).catch(console.log);

gerarMegaSena(20).then(console.log).catch(console.log);
