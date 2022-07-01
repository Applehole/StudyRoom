function solution(n,a,b){
    let result = 1
    for(let i=0; i<n; i++){
        if(Math.abs(a-b)===1){
            return result
        }
        a = Math.ceil(a/2)
        b = Math.ceil(b/2)
        result++
    }
}