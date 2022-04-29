function solution(sizes) {
  var answer = 0;
  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] < sizes[i][1]) {
      sizes[i] = [sizes[i][1], sizes[i][0]];
    }
  }
  let first = [];
  let second = [];
  for (let i = 0; i < sizes.length; i++) {
    first.push(sizes[i][0]);
    second.push(sizes[i][1]);
  }
  answer = Math.max(...first) * Math.max(...second);
  return answer;
}

//link https://programmers.co.kr/learn/courses/30/lessons/86491
