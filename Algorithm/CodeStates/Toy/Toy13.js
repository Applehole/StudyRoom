const insertionSort = function (arr) {
    let answer = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        console.log("현재숫자는", arr[i])
        if (arr[i] >= answer[i - 1]) {
            answer.push(arr[i]);
            console.log("배열에 뒤에 그냥추가")
        } else {
            for (let j = 0; j < i; j++) {
                if (arr[i] <= answer[j]) {
                    const left = answer.slice(0, j);
                    const right = answer.slice(j);
                    answer = left.concat(arr[i], right);
                    console.log("배열에서 위치 찾아서 추가")
                    break;
                }
            }
        }
        console.log("배열", answer)
        console.log("------")
    }
    return answer;
};

insertionSort([6,7,4,8,2,5,3,1])
