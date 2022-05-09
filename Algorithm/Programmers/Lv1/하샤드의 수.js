function solution(x) {
  return Number.isInteger(
    x /
      String(x)
        .split("")
        .reduce((acc, cur) => {
          acc = acc + Number(cur);
          return acc;
        }, 0)
  );
}
