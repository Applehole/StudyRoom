function DateCheck(){

    const firstTime = new Date().getTime();

function solution1(n , m) {
    let answer = [];
    
    for(let i = 1; i <= n; i++) {
      for(let j = 1; j <= n; j++) {
        console.log(i , j);
      }
    }
    return answer;
  }

  solution1(7,7)
let secondTime = new Date().getTime();
console.log("firstAnswer", `${secondTime-firstTime} ms`)

//   function solution2(n , m) {
//     let answer = [];
//     let arr = Array.from({length: m}, () => 0);
    
//     function DFS(L) {
//       if(L === m) {
//         answer.push([...arr]); //배열은 주소값을 참조하기 때문에 얕은 복사를 방지하기 위해 스프레드 문법 사용, arr.slice()도 사용 가능
//       } 
//       else {
//           for(let i = 1; i <= n; i++) {
//               arr[L] = i;
//               DFS(L + 1);
//           }
//       }
//     }
  
//     DFS(0);
//     return answer;
//   }

//   solution2(7,7)
//   let ThirdTime = new Date().getTime();
//   console.log("secondAnswer", `${ThirdTime-secondTime} ms`)
  
}

DateCheck()