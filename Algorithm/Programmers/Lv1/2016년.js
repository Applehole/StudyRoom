function solution(a, b) {
  let theWeek = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
  let EachWeek = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  // 1, 3, 5, 7, 8, 10, 12 - 31일
  // 2 - 29일
  // 4, 6, 9, 11 - 30일
  let calDate = 0;
  for (let i = 0; i < a - 1; i++) {
    calDate = calDate + EachWeek[i];
  }
  calDate = calDate + b;
  return theWeek[calDate % 7];
}

solution(1, 1);

// function solution(a, b) {
//   let week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
//   let year = "2016";
//   let month = a;
//   let day = b;
//   let dayOfWeek = week[new Date(year + "-" + month + "-" + day).getDay()];
//   return dayOfWeek;
// }
