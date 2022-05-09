function solution(arr1, arr2) {
  var answer = [];

  for (let i = 0; i < arr1.length; i++) {
    let tempArray = [];
    for (let z = 0; z < arr1[i].length; z++) {
      tempArray.push(arr1[i][z] + arr2[i][z]);
    }
    answer.push(tempArray);
  }

  return answer;
}
