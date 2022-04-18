function solution(lottos, win_nums) {
  var answer = [];
  let includesNumber = 0;
  let countZero = 0;
  lottos.map((el) => {
    if (!el) {
      countZero += 1;
      return;
    }
    if (win_nums.includes(el)) {
      includesNumber += 1;
    }
  });
  if (countZero === 0 && includesNumber === 0) {
    answer.push(6);
  } else {
    answer.push(7 - countZero - includesNumber);
  }
  if (includesNumber === 0) {
    answer.push(6);
    return answer;
  }
  answer.push(7 - includesNumber);
  return answer;
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));

// link https://programmers.co.kr/learn/courses/30/lessons/77484
