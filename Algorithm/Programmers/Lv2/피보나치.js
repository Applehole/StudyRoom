function solution(n) {
    let Array = [0,1,1]
    for(let i=2; i<=n; i++){
        Array[i]= ((Array[i-1]+Array[i-2])%1234567)
    }
    return Array[n]
}