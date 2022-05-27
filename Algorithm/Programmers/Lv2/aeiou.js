function solution(word) {
    var answer = 0;
    let Array = ['A', 'E', 'I', 'O', 'U']
    let tempWord =word.split("")
    tempWord.forEach((el,idx)=>{
        let ArrayNumber = Array.findIndex((number)=>number===el)
        let EachPlaceSum =0
        for(let i=4-idx; i>=0; i--){
            EachPlaceSum = EachPlaceSum + 5**i
        }
        answer = answer + ArrayNumber * EachPlaceSum +1
    })
    return answer;
}