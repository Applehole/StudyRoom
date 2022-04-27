function solution(d, budget) {
  var answer = 0;
  d.sort((a, b) => a - b);
  let tempValue = 0;
  let tempCount = 0;
  for (let i = 0; i < d.length; i++) {
    if (tempValue + d[i] <= budget) {
      tempValue = tempValue + d[i];
      tempCount++;
      continue;
    }
    break;
  }
  answer = tempCount;
  return answer;
}

//link https://programmers.co.kr/learn/courses/30/lessons/12982
