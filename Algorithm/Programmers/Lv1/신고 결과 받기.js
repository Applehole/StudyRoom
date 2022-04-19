function solution(id_list, report, k) {
  var answer = [];
  answer = Array(id_list.length).fill(0);
  const set = new Set(report);
  const tempReportArray = [...set];
  const BlockPerson = Array(id_list.length).fill(0);
  tempReportArray.forEach((el) => {
    BlockPerson[id_list.indexOf(el.split(" ")[1])] += 1;
  });
  const BlockPersonList = [];
  BlockPerson.forEach((el, idx) => {
    if (el >= k) {
      BlockPersonList.push(id_list[idx]);
    }
  });
  tempReportArray.forEach((el) => {
    if (BlockPersonList.includes(el.split(" ")[1])) {
      answer[id_list.indexOf(el.split(" ")[0])] += 1;
    }
  });
  return answer;
}

console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
);

//link https://programmers.co.kr/learn/courses/30/lessons/92334
