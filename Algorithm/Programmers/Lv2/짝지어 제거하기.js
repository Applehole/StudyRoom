function solution(s){
    let storage = []
    storage.push(s[0])
    for(let i=1; i<s.length; i++){
        if(s[i]===storage[storage.length-1]){
            storage.pop()
        }else{
            storage.push(s[i])
        }
    }
    return storage.length ? 0 : 1

}

// function solution(s) { // 처음에는 첫번째 수와 두번째 수를 비교하면서 돌리면서 다시 배열에 넣어주는 식으로 식을 짰는데, 시간복잡도 오류가 났다.
//     for (let z = 0; z <= s.length; z++) {
//         for (let i = 0; i < s.length - 1; i++) {
//             if (s[i] === s[i + 1]) {
//                 s = s.slice(0, i) + s.slice(i + 2, s.length)
//             }
//         }
//         if (z === s.length) {
//             return 0
//         }
//     }
//     return 1
// }