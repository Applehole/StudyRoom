function solution(n) {
  if (n === 1) {
    return 1;
  }
  let value = [];
  for (let i = 0; i <= Math.floor(n / 2); i++) {
    if (n % i === 0) {
      value.push(i);
      value.push(n / i);
    }
  }
  const set = new Set(value);
  let answer = [...set];
  return answer.reduce((acc, cur) => {
    return (acc = acc + cur);
  }, 0);
}
solution(12);
