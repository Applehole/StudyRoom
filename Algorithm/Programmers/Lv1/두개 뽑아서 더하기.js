function solution(numbers) {
  var answer = [];
  let value = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      value.push(numbers[i] + numbers[j]);
    }
  }
  value = value.filter((number, index) => {
    return value.indexOf(number) === index;
  });
  answer = value.sort((a, b) => a - b);
  return answer;
}

//link https://programmers.co.kr/learn/courses/30/lessons/68644
