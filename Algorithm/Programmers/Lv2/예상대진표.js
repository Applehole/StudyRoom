function solution(n,a,b){
    let result = 1
    for(let i=0; i<n; i++){
        if(Math.abs(a-b)){
            if(!a%2){
                if(a-1===b){
                    return result
                }
            }if(a%2){
                if(a+1===b){
                    return result
                }
            }
        }
        a = Math.ceil(a/2)
        b = Math.ceil(b/2)
        result++
    }
}

solution(8,4,5)
