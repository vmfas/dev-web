function rand ({ min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
};

const obj = (rand ( {max: 100, min: 1} ));
console.log(obj);