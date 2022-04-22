const swap = function (idx1, idx2, arr) {
  // 두 변수를 바꾸는 방법
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]; // 앞뒤가 바뀐다.
};

let bubbleSort = function (arr) {
  let N = arr.length;
  for (let i = 0; i < N; i++) {
    // 처음부터 끝까지 돌린다.
    let swaps = 0; // 변수를 지정을 해둔다(시간복잡도 때문에)
    for (let j = 0; j < N - 1 - i; j++) {
      //1을 빼주는 이유는 마지막 수를 비교하게 된다면 배열을 벗어나기 때문에 오류가 생긴다.
      if (arr[j] > arr[j + 1]) {
        // 앞과 뒤의 수를 비교를 해준다 다음 앞이 더 크다면
        swaps++; // 변수를 1 늘려주고
        swap(j, j + 1, arr); // 두개의 수를 바꿔준다.
      }
    }
    if (swaps === 0) {
      // 만약에 비교를 했는데 바뀐것이 없다면 바로 종료시킨다.
      break;
    }
  }
  return arr;
};
