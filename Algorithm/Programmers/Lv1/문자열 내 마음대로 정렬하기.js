function solution(strings, n) {
  var answer = [];
  let tempValue = [];
  for (let i = 0; i < strings.length; i++) {
    tempValue.push(strings[i][n]);
  }
  strings.sort();
  tempValue.sort();
  for (let z = 0; z < tempValue.length; z++) {
    for (let i = 0; i < strings.length; i++) {
      if (strings[i][n] === tempValue[z]) {
        answer.push(strings[i]);
        strings.splice(i, 1);
        break;
      }
    }
  }
  return answer;
}

//link https://programmers.co.kr/learn/courses/30/lessons/12915
