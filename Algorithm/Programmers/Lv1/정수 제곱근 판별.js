function solution(n) {
  if (!Number.isInteger(Math.sqrt(n))) {
    return -1;
  } else {
    return Math.pow(Math.sqrt(n) + 1, 2);
  }
}
