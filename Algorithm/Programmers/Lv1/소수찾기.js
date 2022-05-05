function solution(n) {
  let sum = 0;
  let everyNumberArray = [];
  for (let i = 0; i < n; i++) {
    everyNumberArray[i] = i;
  }
  for (let i = 2; i <= n; i++) {
    if (everyNumberArray[i] === 0) {
      continue;
    }
    for (let z = i * 2; z <= n; z += i) {
      everyNumberArray[z] = 0;
    }
    sum++;
  }
  return sum;
}

// function solution(n) {
//   let answer = 0;
//   for (let i = 2; i <= n; i++) {
//     let value = 0;
//     for (let z = 2; z < i; z++) {
//       if (i % z === 0) {
//         value++;
//         break;
//       }
//     }
//     if (value === 0) {
//       answer++;
//     }
//   }
//   return answer;
// }

console.log(solution(20));
