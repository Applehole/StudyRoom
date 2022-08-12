function add(a,b){
    return a+b
}

console.log(add())// NaN
console.log(add(1))// NaN
console.log(add(1,1))//2
console.log(add(1,1,1))//2
console.log(add("hi"))//hiundifined
console.log(add("hi","hello"))//hihello