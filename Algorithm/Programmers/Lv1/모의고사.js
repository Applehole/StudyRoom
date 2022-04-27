function solution(answers) {
  const answer = [];
  const firstPattern = [1, 2, 3, 4, 5];
  const secondPattern = [2, 1, 2, 3, 2, 4, 2, 5];
  const thirdPattern = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let correctCount = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === firstPattern[i % firstPattern.length])
      correctCount[0] += 1;
    if (answers[i] === secondPattern[i % secondPattern.length])
      correctCount[1] += 1;
    if (answers[i] === thirdPattern[i % thirdPattern.length])
      correctCount[2] += 1;
  }

  for (let i = 0; i < 3; i++) {
    if (correctCount[i] === Math.max(...correctCount)) answer.push(i + 1);
  }

  return answer;
}

//link https://programmers.co.kr/learn/courses/30/lessons/42840
