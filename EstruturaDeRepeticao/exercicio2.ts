let mero: number = 4

if(mero <= 1){
    console.log("nao é primo")
}else{
    for(let i = 2; i < mero; i++){
        if(mero % i == 0){
            console.log("nao é primo")
        }else{
            console.log("é primo")
        }
    }
}