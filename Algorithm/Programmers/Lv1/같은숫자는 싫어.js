function solution(arr) {
  //알고보니 쉬운문제였다..
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}

// function solution(arr) {
//   // while 문 시간복잡도 초과
//   var answer = [];
//   while (arr.length !== 0) {
//     const head = arr[0];
//     const tail = arr.slice(1);
//     answer.push(head);
//     arr.shift();
//     for (let i = 0; i < tail.length; i++) {
//       if (head === tail[i]) {
//         arr.shift();
//         continue;
//       }
//       break;
//     }
//   }
//   return answer;
// }

// function solution(arr) { // 재귀문 시간복잡도 초과
//   var answer = [];
//   if (arr.length === 0) {
//     return [];
//   }
//   const head = arr[0];
//   const tail = arr.slice(1);
//   answer.push(head);
//   for (let i = 0; i < tail.length; i++) {
//     if (head === tail[0]) {
//       tail.shift();
//       continue;
//     }
//     break;
//   }
//   return answer.concat(...solution(tail));
// }

solution([4, 4, 4, 3, 3]);
