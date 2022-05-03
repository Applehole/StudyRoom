function solution(a, b) {
  if (a === b) {
    return a;
  }
  return ((a + b) * (Math.abs(a - b) + 1)) / 2;
}

// 가우스 공식을 쓴다
// 원래 공식은 숫자의 갯수 * 두 숫자의 합 /2
// n(a+b)/2

//이걸 다르게쓰면
// (b-a+1)*(a+b)/2
// 이렇게 쓸 수 있다.
