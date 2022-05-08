function solution(n) {
  let answer = 0;
  let everyArray = String(n).split("");
  for (let i = 0; i < everyArray.length; i++) {
    answer = answer + Number(everyArray[i]);
  }
  return answer;
}
