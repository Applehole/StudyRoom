function solution(numbers) {
    var answer = '';
    numbers.sort(sortFunc)
    answer = numbers.join('')
    if(answer[0] === '0') return '0'
    return answer;
}
const sortFunc =  (a,b) =>{
    const compareA = parseInt(a.toString() + b.toString())
    const compareB = parseInt(b.toString() + a.toString())
    return compareB - compareA
}


// 처음에는 순열로 모든 경우의 수를 찾아서 그중 제일 큰수를 리턴을 하게 해줬다. //시간초과
// function solution(numbers) {
//     var answer = '';
    
//     let result = [];
//     const permutation = (arr, bucket, n) => {
//     if (n === 0) {
//       result.push(bucket);
//       return;
//     }
//     for (let i = 0; i < arr.length; i++) {
//       const choice = arr[i];
//       const sliceArr = arr.slice();
//       sliceArr.splice(i, 1);
//       permutation(sliceArr, bucket.concat(choice), n - 1);
//     }
//   };
//     permutation(numbers, [], numbers.length)
//     const EveryArray = result.map((Array)=>{
//        return Array.reduce((acc,cur)=>{
//           return acc = acc+cur 
//         },"")
//     })
//     answer = EveryArray.reduce((acc,cur)=>{
//         let mostLong = acc
//         if(acc<Number(cur)){
//             mostLong =Number(cur)
//         }
//         return mostLong
//     },0)
//     return String(answer);
// }