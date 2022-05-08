function solution(n) {
  var answer = [];
  let EveryArray = String(n).split("");
  for (let i = 0; i < EveryArray.length; i++) {
    answer.unshift(Number(EveryArray[i]));
  }
  return answer;
}
