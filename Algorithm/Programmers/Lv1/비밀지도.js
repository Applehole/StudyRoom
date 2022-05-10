function solution(n, arr1, arr2) {
  var answer = [];
  const EveryMap = [];
  let tempArray = Array(n).fill("0");
  for (let i = 0; i < n; i++) {
    EveryMap.push(tempArray.slice(0));
  }
  for (let i = 0; i < arr1.length; i++) {
    let ChangedArray = arr1[i].toString(2);
    while (ChangedArray.length < n) {
      ChangedArray = 0 + ChangedArray;
    }
    for (let z = 0; z < ChangedArray.length; z++) {
      if (ChangedArray[z] === "1") {
        EveryMap[i][z] = "#";
      }
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    let ChangedArray = arr2[i].toString(2);
    while (ChangedArray.length < n) {
      ChangedArray = 0 + ChangedArray;
    }
    for (let z = 0; z < ChangedArray.length; z++) {
      if (ChangedArray[z] === "1") {
        EveryMap[i][z] = "#";
      }
    }
  }
  for (let i = 0; i < EveryMap.length; i++) {
    let tempValue = "";
    for (let z = 0; z < EveryMap[i].length; z++) {
      if (EveryMap[i][z] === "#") {
        tempValue += "#";
      } else {
        tempValue += " ";
      }
    }
    answer.push(tempValue);
  }

  return answer;
}
