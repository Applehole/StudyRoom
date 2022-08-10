// function solution(clothes) {
//     let tempArray = []
//     let tempNumberArray = []

//     for (let i = 0; i < clothes.length; i++) {
//         if (tempArray.includes(clothes[i][1])) {
//             tempNumberArray[tempArray.findIndex((el) => el === clothes[i][1])] = tempNumberArray[tempArray.findIndex((el) => el === clothes[i][1])] + 1
//         } else {
//             tempArray.push(clothes[i][1])
//             tempNumberArray.push(1)
//         }
//     }
//     if (tempArray.length === 1) {
//         return clothes.length
//     }
//     let creduceEveryNumber = tempNumberArray.reduce((cur, acc) => {
//         return cur = cur * acc
//     }, 1)

//     return clothes.length + creduceEveryNumber
// }

function solution(clothes) {
    var answer = 0;
    const spyWear = {}
    for(const clothNPart of clothes){
        if(spyWear[clothNPart[1]] === undefined) spyWear[clothNPart[1]] = []
        spyWear[clothNPart[1]].push(clothNPart[0])
    }
    const clothesCount = []
    for(const part in spyWear) clothesCount.push(spyWear[part].length + 1)
    answer = clothesCount.reduce((previous, current) => previous * current, 1) - 1
    return answer;
}

solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"], ["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]])