let ladoUm: number = 12
let ladoDois:number= 11
let ladoTres:number = 13

if(ladoUm == ladoDois && ladoDois == ladoTres && ladoTres == ladoUm){
    console.log("Equilatero")
}else if(ladoUm != ladoDois && ladoDois != ladoTres && ladoTres != ladoUm){
    console.log("escaleno")
}else{
    console.log("isoceles")
}