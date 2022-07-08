function solution(num) {
    var answer = 0;
    for(let i=1; i<=num; i++){
        let tempNumber = i+""
        for(let j=0; j<tempNumber.length; j++){
            if(tempNumber[j]==="3"||tempNumber[j]==="6"||tempNumber[j]==="9"){
                answer++
                break // 이걸로 칠건지 안칠건지 결정하기
        }
        }
    }
    return answer
}

solution(5)