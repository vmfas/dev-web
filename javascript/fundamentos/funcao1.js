function imprimirSoma(a, b) {
    console.log(a + b);
};

imprimirSoma(2, 3);
imprimirSoma(2);
imprimirSoma();

function soma(a, b = 0) {
    return a + b;
};

console.log(soma(4));
console.log(soma(4, 4));