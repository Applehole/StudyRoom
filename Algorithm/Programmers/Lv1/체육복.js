function solution(n, lost, reserve) {
  var answer = 0;
  let Array = [];
  for (let i = 1; i <= n; i++) {
    Array.push(i);
  }
  Array = Array.map((el) => {
    if (reserve.includes(el)) {
      return "R";
    } else {
      return el;
    }
  });
  Array = Array.map((el, index) => {
    if (lost.includes(index + 1)) {
      if (el === "R") {
        return index + 1;
      } else {
        return "L";
      }
    }
    return el;
  });
  for (let i = 0; i < Array.length; i++) {
    if (Array[i] === "R") {
      changeArray(Array, i);
    }
  }
  Array = Array.filter((el) => {
    return el !== "L";
  });
  answer = Array.length;
  return answer;
  function changeArray(array, index) {
    if (0 < index) {
      if (array[index - 1] === "L") {
        array[index - 1] = "F";
        return array;
      }
    }
    if (index < array.length) {
      if (array[index + 1] === "L") {
        array[index + 1] = "F";
        return array;
      }
    }
    return array;
  }
}
//link https://programmers.co.kr/learn/courses/30/lessons/42862
