function solution(s) {
  return s
    .split(" ")
    .map((el) => {
      let answer = "";
      for (let i = 0; i < el.length; i++) {
        if (i % 2) {
          answer += el[i].toLowerCase();
        } else {
          answer += el[i].toUpperCase();
        }
      }
      return answer;
    })
    .join(" ");
}

// function solution(s) {
//   let result = "";
//   let everyStringArray = s.split(" ");
//   function MakeItUpperCase(string) {
//     for (let i = 0; i < string.length; i++) {
//       if (i % 2 === 1) {
//         string = string.replace(string[i], string[i].toLowerCase());
//         continue;
//       } else {
//         string = string.replace(string[i], string[i].toUpperCase());
//       }
//     }
//     return string;
//   }
//   for (let i = 0; i < everyStringArray.length; i++) {
//     result += MakeItUpperCase(everyStringArray[i]) + " ";
//   }
//   return result.slice(0, result.length - 1);
// }
