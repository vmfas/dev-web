function soma () {
    let soma = 0;
    for (i in arguments) {
        soma += arguments [i]
    };
    return soma
};

console.log(soma(1));
console.log(soma());
console.log(soma(7, 4, 3, 2, 1));
console.log(soma('a', 'b', 'c'));