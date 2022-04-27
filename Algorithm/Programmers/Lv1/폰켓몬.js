function solution(nums) {
  var answer = 0;
  let tempValue = nums.reduce((acc, cur) => {
    if (!acc.includes(cur)) {
      acc.push(cur);
    }
    return acc;
  }, []);
  if (nums.length / 2 < tempValue.length) {
    return nums.length / 2;
  }
  answer = tempValue.length;
  return answer;
}

//link https://programmers.co.kr/learn/courses/30/lessons/1845
