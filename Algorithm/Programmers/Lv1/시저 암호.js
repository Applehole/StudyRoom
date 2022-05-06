function solution(s, n) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
      continue;
    }
    if (s[i].toUpperCase().charCodeAt() + n > 90) {
      answer += String.fromCharCode(s[i].charCodeAt() + n - 26);
      continue;
    }
    answer += String.fromCharCode(s[i].charCodeAt() + n);
  }
  return answer;
}

solution("z", 1);
