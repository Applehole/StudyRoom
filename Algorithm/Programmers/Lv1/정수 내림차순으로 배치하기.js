function solution(n) {
  var answer = "";
  let everyArray = String(n)
    .split("")
    .sort((a, b) => b - a);
  for (let i = 0; i < everyArray.length; i++) {
    answer = answer + everyArray[i];
  }
  return Number(answer);
}
