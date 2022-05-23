
function solution(priorities, location) {
    var list = priorities.map((t,i)=>({
        my : i === location,
        val : t
    }));
    var count = 0;
    console.log(list)        
    while(true){
        var cur = list.splice(0,1)[0];        
        if(list.some(t=> t.val > cur.val )){
            list.push(cur);                        
        }
        else{            
            count++;
            if(cur.my) return count;
        }
    }
}


// function solution(priorities, location) {
//     var answer = 0;
//     let target = priorities[location]
//     priorities[location] = "x"
//     let counter = 0
//     while (priorities.includes("x")) {
//         const head = priorities[0]
//         const tail = priorities.slice(1)
//         if (head === "x") {
//             if (!tail.filter((el) => {
//                 return el > target
//             }).length) {
//                 counter++
//                 return counter
//             } else {
//                 priorities = tail.concat(head)
//                 continue
//             }
//         }
//         const filteredHigh = tail.filter((el) => {
//             if (el === "x") {
//                 el === target
//                 return target > head
//             }
//             return el > head
//         }).length
//         if (filteredHigh) {
//             priorities = tail.concat(head)
//             continue
//         } else {
//             counter++
//             priorities = tail
//         }
//     }
//     return answer;
// }

solution([2, 1, 3, 2], 2)