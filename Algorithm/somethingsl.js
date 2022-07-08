function solution(languages, scores) {
    // 1. 모든 언어를 정렬해서 저장해둔다.
    // 2. 언어를 for문으로 돌리면서 평균점수를 1번부터 낸다.
    // 3. 평균점수가 나왔으면 그 중에서 제일 높은 숫자를 낸다.
    // 4. 지원한 숫자를 비교한다.
    // 5. 사전을 비교한다.
    let result = []
    let filterLanguages = [...new Set(languages)]

    for(let j=0; j<scores[0].length; j++){
        let tempArray= []
        for(let i=0; i<filterLanguages.length; i++){
        tempArray.push(checkAverage(filterLanguages[i],j))
        }
        let highNumber = Math.max(...tempArray)
        if(tempArray.filter((number)=>{
            return number===highNumber
        }).length===1){
            result.push(filterLanguages[tempArray.findIndex((el)=>el===highNumber)])
            continue
        }
    }

    return result

    function checkAverage (language,number){
        let array = []
        for(let i=0; i<languages.length; i++){
            if(languages[i]===language){
                array.push(scores[i][number])
            }
        }
        return array.reduce((pre,cur)=>{
            return pre = pre+cur
        },0)/array.length
    }
}

solution(
    ["C", "SWIFT", "JAVA", "SWIFT", "JAVA", "JAVA", "R"], [[65, 80, 90], [46, 100, 70], [91, 96, 59], [89, 90, 61], [0, 94, 75], [38, 95, 47], [50, 60, 90]])