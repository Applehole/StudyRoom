function solution(price, money, count) {
  var answer = 0;
  let everyMoney = 0;
  for (let i = 1; i <= count; i++) {
    everyMoney = everyMoney + price * i;
  }
  if (money > everyMoney) {
    return 0;
  }
  answer = everyMoney - money;
  return answer;
}

//가우스 공식 이용

function solution(price, money, count) {
  // 순서 식에서 곱셈끼리는 상관이 없다
  // 카운트*(카운트+1)/2는 가우스 공식=== 모든 수의 덧셈을 빠르게 이용할 수 있는 공식
  const tmp = (price * count * (count + 1)) / 2 - money;
  return tmp > 0 ? tmp : 0;
}

// link https://programmers.co.kr/learn/courses/30/lessons/82612
