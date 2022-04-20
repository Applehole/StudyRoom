function solution(array, commands) {
  var answer = [];
  commands.forEach((el) => {
    const slicedArray = array.slice(el[0] - 1, el[1]);
    answer.push(slicedArray.sort((a, b) => a - b)[el[2] - 1]);
  });
  return answer;
}

// link https://programmers.co.kr/learn/courses/30/lessons/42748
