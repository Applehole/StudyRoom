function orderOfPresentation(N, K) {
  // TODO: 여기에 코드를 작성합니다.
  const factorial = (n) => {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  };
  let result = 0;
  const CheckNumber = Array(N + 1).fill(false);
  // N의 길이만큼 false를 넣는데, +1을 추가한 이유는 짜르기 좋게하기 위해서
  for (let i = 0; i < N; i++) {
    let number = K[i];
    CheckNumber[number] = true;
    let cutArray = CheckNumber.slice(1, number); // 1~해당숫자까지의 false
    let filteredValue = cutArray.filter((el) => {
      // 그중에서 true 걸러내기
      return el === false;
    });
    let caseOfNumber = filteredValue.length * factorial(N - i - 1); //그두개에서 돌린 수만큼 곱하기
    result += caseOfNumber;
  }
  return result;
}

console.log(orderOfPresentation(4, [3, 2, 1, 4]));
