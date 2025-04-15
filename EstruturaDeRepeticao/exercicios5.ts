let fibo: number = 20
let b = 1
let a = 0

for(let i =0; i <= fibo; i++){
    
    console.log(a)
    let temp = a+b
    a=b
    b=temp
}