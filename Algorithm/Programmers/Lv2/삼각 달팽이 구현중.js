
function solution(n) {
    let Storage = []
    for(let i=1; i<=n; i++){
        Storage.push(Array(i).fill(0))
    }
    console.log(Storage)
    console.log(checkZero(Storage))
    Storage[0][0] = 1
    console.log(Storage)
    
    
    function checkZero (Array){
        for(let i=0; i<Array.length; i++){
            if(Array[i].includes(0)){
                return true
            }
        }
        return false
    }
}

solution(4)