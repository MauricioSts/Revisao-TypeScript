let nun: number = 7;

for (let atual = 2; atual <= nun; atual++) {
    let ehPrimo = true;

    for (let i = 2; i < atual; i++) {
        if (atual % i === 0) {
            ehPrimo = false;
            break;
        }
    }

    if (ehPrimo) {
        console.log(atual); 
    }
}
