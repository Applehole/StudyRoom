function solution(people, limit) {

    let twoStuff = 0;
    let sortedPeople = people.sort((a, b) => a - b);
    let leftIdx = 0;
    let rightIdx = sortedPeople.length - 1; 
    while(leftIdx < rightIdx) {
        if(sortedPeople[leftIdx] + sortedPeople[rightIdx] <= limit) {
            leftIdx++;
            rightIdx--;
            twoStuff++;
        } else {
            rightIdx--;
        }
    }
    return people.length - twoStuff;
  }

// function solution(people, limit) { // 효율성테스트 실패

//     let sortedPeople = people.sort((a, b) => b - a)
//     let result = 0

//     while (sortedPeople.length > 0) {
//         const head = sortedPeople.shift()
//         for (let i = 0; i < sortedPeople.length; i++) {
//             if (head + sortedPeople[i] <= limit) {
//                 sortedPeople.splice(i, 1)
//                 result++
//                 break
//             }
//         }
//         result++
//     }
//     return result
// }

solution([70, 80, 50], 100)