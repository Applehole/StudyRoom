function solution(nums) {
  var answer = 0;

  let length = nums.length;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      for (let k = j + 1; k < length; k++) {
        const number = nums[i] + nums[j] + nums[k];
        if (isPrime(number)) answer++;
      }
    }
  }

  function isPrime(number) {
    for (let i = 2; i < number / 2; i++) {
      if (number % i === 0) return false;
    }
    return true;
  }

  return answer;
}

//이것도 3가지의 경우의 수를 전부 만들어버림
// function solution(nums) {
//   var answer = -1;

//   let result = [];

//   const permutation = (arr, bucket, n) => {
//     if (n === 0) {
//       result.push(bucket);
//       return;
//     }

//     for (let i = 0; i < arr.length; i++) {
//       // 하나를 초이스함
//       const choice = arr[i];
//       // 배열을 슬라이스함
//       const sliceArr = arr.slice();
//       // 초이스만 뺀다
//       sliceArr.splice(i, 1);
//       // 재귀
//       permutation(sliceArr, bucket.concat(choice), n - 1);
//     }
//   };
//   permutation(nums, [], 3);

//   let sumValues = result.map((eachArray) => {
//     return eachArray.reduce((acc, cur) => {
//       return acc + cur;
//     }, 0);
//   });
//   answer = sumValues.filter((number) => {
//     for (let i = 2; i < number; i++) {
//       if (number % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }).length;
//   return answer;
// }

// console.log(solution([1, 2, 3, 4]));

// 제일처음 모든 수를 구한는줄 알고 만든 모든 경우의 수의 소수 런타임 에러가 뜬다
// function solution(nums) {
//     var answer = -1;
//     let SelectedArray= []
//     let tempArray = [[]]
//     for(let i=0; i<nums.length; i++){
//      for(let j=0; j<tempArray.length; j++){
//         SelectedArray.push([...tempArray[j],nums[i]])
//      }
//      tempArray = tempArray.concat(SelectedArray)
//      SelectedArray=[]
//    }
//     let everyPrime = tempArray.filter((seperatedNumber)=>{
//         let oneResult= seperatedNumber.reduce((acc,cur)=>{
//            return acc+cur
//         },0)
//         for(let i=2; i<oneResult; i++){
//             if(oneResult%i===0){
//                 return false
//             }
//         }
//         return true
//     })
//    answer= everyPrime.filter((el)=>{
//         return el.length===3
//     }).length

//     return answer;
// }
