function max(...numeros: number[]): number{//...numeros REST PARAMETER permite q a func receba mais de um valor
    let maior = numeros[0];// assume que o primeiro numero do index é o maior
    for (let i=1; i<numeros.length; i++) {
        if (numeros[i] > maior) {//compara o numero do indice atal com o anterior
            maior = numeros[i];
        }
    }
    return maior;
}

console.log(max(1, 20, 3, 4, 5, 64, 7, 82, 9, 10)); 
console.log(max(50, 160, 90, 120));