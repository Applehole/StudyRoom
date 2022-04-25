function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    let count = 0;
    for (let j = 0; j <= i; j++) {
      if (i % j === 0) {
        if (j * j === i) {
          count++;
        } else {
          count = count + 2;
        }
      }
    }
    if (count % 2 === 0) {
      answer = answer + i;
    } else {
      answer = answer - i;
    }
  }
  return answer;
}

//link https://programmers.co.kr/learn/courses/30/lessons/77884
