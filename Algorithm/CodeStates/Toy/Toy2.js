function fibonacci(n) {
  arr = [0, 1];
  function calculate(n) {
    if (arr[n] !== undefined) {
      return arr[n];
    }
    arr[n] = calculate(n - 2) + calculate(n - 1);
    return arr[n];
  }
  return calculate(n);
}
