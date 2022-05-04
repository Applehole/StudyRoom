function solution(dartResult) {
  let tempArray = dartResult.split("");
  let real = [];
  for (let i = 0; i < tempArray.length; i++) {
    if (
      typeof Number(tempArray[i]) === "number" &&
      !isNaN(Number(tempArray[i]))
    ) {
      if (tempArray[i] === "1" && tempArray[i + 1] === "0") {
        real.push(10);
        i++;
        continue;
      }
      real.push(Number(tempArray[i]));
      continue;
    }
    if (tempArray[i] === "S") {
      real[real.length - 1] = real[real.length - 1] ** 1;
      continue;
    }
    if (tempArray[i] === "D") {
      real[real.length - 1] = real[real.length - 1] ** 2;
      continue;
    }
    if (tempArray[i] === "T") {
      real[real.length - 1] = real[real.length - 1] ** 3;
      continue;
    }
    if (tempArray[i] === "*") {
      real[real.length - 1] = real[real.length - 1] * 2;
      real[real.length - 2] = real[real.length - 2] * 2;
      continue;
    }
    if (tempArray[i] === "#") {
      real[real.length - 1] = -real[real.length - 1];
      continue;
    }
  }
  return real.reduce((acc, cur) => {
    acc = acc + cur;
    return acc;
  }, 0);
}
//link https://programmers.co.kr/learn/courses/30/lessons/17682
