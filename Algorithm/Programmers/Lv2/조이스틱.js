function solution(name) {
    let sum = 0;
    for (let i = 0; i < name.length; i++) {
        let diff = name[i].charCodeAt() - 'A'.charCodeAt();
        sum += diff > 13 ? 26 - diff : diff;
    }

    let minMove = name.length - 1;
    for (let i = 1; i < name.length; i++) {
        if (name[i] === 'A') {
            for (var j = i + 1; j < name.length; j++) {
                if (name[j] !== 'A') {
                    break;
                }
            }

            const left = i - 1;
            const right = name.length - j;
            minMove = Math.min(minMove, left > right ? left + right * 2 : left * 2 + right);

            i = j;
        }
    }

    return sum + minMove;
}

// function solution(name) {
//     var answer = 0;
//     const length = name.length;
//     let upDownCount = 0
//     let leftRightCountList = [length - 1]//한 방향으로 쭉 갔을 때
//     for (let i = 0; i < length; i++) upDownCount += minUpOrDownCount(name[i])
//     for (let startOfA = 0; startOfA < name.length; startOfA++) {
//         let endOfA = startOfA + 1;
//         while (endOfA < length && name[endOfA] === 'A') endOfA++;
//         const [moveToStartOfA, moveToEndOfA] = [startOfA, length - endOfA]
//         leftRightCountList.push(moveToStartOfA * 2 + moveToEndOfA)// 0 -> A.., 0 <- A.., ..A <- -1
//         leftRightCountList.push(moveToEndOfA * 2 + moveToStartOfA)//시작부터 뒤로 가는 경우 ..A <- -1, ..A -> -1, 0 -> A..
//     }
//     answer = upDownCount + Math.min(...leftRightCountList)
//     return answer;
// }

// function minUpOrDownCount(destination) {
//     const Alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//     const index = Alphabet.indexOf(destination)
//     return Math.min(index, Alphabet.length - index)
// }

// function solution(name) {
//     let startAlphabetArray = ["B","C","D","E","F","G","H","I","J","K","L","M"]
//     let BackAlphabetArray = ["N","O","P","Q","R","S","T","U","V","W","X","Y","Z"].reverse()
//     let tempStorage = []
    
//     for(let i=0; i<name.length; i++){
//         let currentString = name[i]
//         if(startAlphabetArray.includes(currentString)){
//             tempStorage.push(startAlphabetArray.findIndex((el)=>el===currentString)+1)
//             continue
//         }
//         if(BackAlphabetArray.includes(currentString)){
//             tempStorage.push(BackAlphabetArray.findIndex((el)=>el===currentString)+1)
//             continue
//         }
//         tempStorage.push(0)
//     }
//     let checkStorage =tempStorage.filter((el)=>{return el===0}).length
//     if(!checkStorage){
//         return tempStorage.reduce((acc,cur)=>{
//            return acc = acc + cur +1 
//         },0)-1
//     }else{
//         let calculate = tempStorage.slice(1)
//         function checkZeroStart(Array){
//             let number = 0
//             for(let i=0; i<Array.length; i++){
//                 if(Array[i]===0){
//                     number++
//                     continue
//                 }
//                 return number
//             }
//         }
//         function checkZeroEnd(Array){
//             let number = 0
//             for(let i=Array.length-1; i>0; i--){
//                 if(Array[i]===0){
//                     number++
//                     continue
//                 }
//                 return number
//             }
//         }
//         let A = checkZeroStart(calculate)
//         let B = checkZeroEnd(calculate)
//         return tempStorage.reduce((acc,cur)=>{
//             return acc = acc+cur
//         },0) +calculate.length-Math.max(A,B)
//     }
// }

solution("ABAAAAAAAAABB") // 11
