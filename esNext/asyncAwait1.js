function esperarPor(tempo = 2000) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, tempo);
  });
}

esperarPor(2000)
  .then(() => console.log("Executando promise1..."))
  .then(esperarPor)
  .then(() => console.log("Executando promise2..."))
  .then(esperarPor)
  .then(() => console.log("Executando promise3..."));

function retornarValor() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(10);
    }, 5000);
  });
}

async function executar() {
  await esperarPor(1500);
  console.log("Async/Await 1");
  await esperarPor(1500);
  console.log("Async/Await 2");
  await esperarPor(1500);
  console.log("Async/Await 3");
}

async function executar() {
  let valor = await retornarValor();

  await esperarPor(1500);
  console.log(`Async/Await ${valor}`);
  await esperarPor(1500);
  console.log(`Async/Await ${valor + 1}`);
  await esperarPor(1500);
  console.log(`Async/Await ${valor + 2}`);

  return valor + 3;
}

executar();
executar().then(console.log);

async function executarDeVerdade() {
  const valor = await executar();
  console.log(valor);
}

function retornarValorRapido() {
  return 20;
}

executarDeVerdade();
console.log(retornarValorRapido());
