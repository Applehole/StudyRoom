function solution(N, stages) {
  var answer = [];
  let tempValue = [];
  const Value = {};
  for (let i = 1; i <= N; i++) {
    let currentLevel = 0;
    let passedPerson = 0;
    for (let j = 0; j < stages.length; j++) {
      if (stages[j] === i) {
        currentLevel++;
      }
      if (stages[j] >= i) {
        passedPerson++;
        continue;
      }
    }
    if (currentLevel === 0) {
      Value[i] = 0;
      continue;
    }
    Value[i] = currentLevel / passedPerson;
  }
  for (const failPercentage in Value) {
    tempValue.push(Value[failPercentage]);
  }
  tempValue.sort((a, b) => b - a);
  for (let i = 1; i <= Object.keys(Value).length; i++) {
    let place = tempValue.indexOf(Value[i]);
    tempValue.splice(place, 1, i);
  }
  answer = tempValue;
  return answer;
}
