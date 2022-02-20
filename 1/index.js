var escalera = (linea) => {
    var inicio = 1;
    while (0 != linea) {
        console.log(" ".repeat(linea - 1) + "*".repeat(inicio));
        linea--;
        inicio++;
    }
}
escalera(6);