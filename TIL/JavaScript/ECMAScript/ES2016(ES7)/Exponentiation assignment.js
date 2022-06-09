let Number = 3

function add1 (x){
    return x= x+1
}

function add2 (x){
    return x++
}

function minus1(x){
    return x= x-1
}

function minus2(x){
    return x--
}

function Exponentiation1(x){
    x = x**2
    return x
}

function Exponentiation2(x){
    x**=2
    return x
}

console.log(Exponentiation1(2))
console.log(Exponentiation2(3))