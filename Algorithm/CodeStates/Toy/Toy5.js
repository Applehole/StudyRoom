let tiling = function (n) {
  const arr = [0, 1, 2];
  const tilingNumber = (num) => {
    //피보나치 처럼 돌렸다.
    if (arr[num] !== undefined) return arr[num];
    if (num <= 2) return arr[n];
    arr[num] = tilingNumber(num - 1) + tilingNumber(num - 2);
    return arr[num];
  };
  return tilingNumber(n);
};
