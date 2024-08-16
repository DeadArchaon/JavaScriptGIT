function continhas(preço, desconto) {
    if (desconto < 10) {
        return preço - (preço * (desconto / 100));
    } else if (desconto > 10 && desconto < 30) {
        return preço - (preço * (desconto / 100));
    } else if (desconto === 0) {
        return preço * 2;
    }
}

console.log(continhas(100, 20));
console.log(continhas(50, 0));
console.log(continhas(200, 5));