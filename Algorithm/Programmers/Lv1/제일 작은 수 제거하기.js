function solution(arr) {
  if (arr.length === 1) {
    return [-1];
  }
  let mostLowNumber = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (mostLowNumber > arr[i]) {
      mostLowNumber = arr[i];
    }
  }
  arr.splice(
    arr.findIndex((el) => el === mostLowNumber),
    1
  );
  return arr;
}
