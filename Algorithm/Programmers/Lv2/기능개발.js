function solution(progresses, speeds) { //for문 수정 = findIndex로
    var answer = [];
    let TookADays = []
    for(let i=0; i<progresses.length; i++){
        let percentage = progresses[i]
        let workSpeed = speeds[i]
        let Days= 0
        while(percentage < 100){
            percentage = percentage+workSpeed
            Days++
        }
        TookADays.push(Days)
    }
    while(TookADays.length > 0){
        let longNumber = TookADays.findIndex(el=>el>TookADays[0])
        if(longNumber===-1){
            answer.push(TookADays.length)
            TookADays.splice(0,TookADays.length)
        }else{
            answer.push(longNumber)
            TookADays.splice(0,longNumber)
        }
    }
    return answer;
}

// function solution(progresses, speeds) {
//     var answer = [];
//     let TookADays = []
//     for(let i=0; i<progresses.length; i++){
//         let percentage = progresses[i]
//         let workSpeed = speeds[i]
//         let Days= 0
//         while(percentage < 100){
//             percentage = percentage+workSpeed
//             Days++
//         }
//         TookADays.push(Days)
//     }
//     while(TookADays.length){
//         let Head = TookADays[0]
//         let tail = TookADays.slice(1)
//         if(TookADays.length===1){
//             answer.push(1)
//             TookADays = 0
//         }
//         for(let i=0; i<tail.length; i++){
//             if(Head >= tail[i]){
//                 continue
//             }else{
//                 answer.push(i+1)
//                 TookADays = TookADays.slice(i+1)
//                 break
//             }
//         }
//     }
//     return answer;
// }
// solution([93, 30, 55],[1, 30, 5])