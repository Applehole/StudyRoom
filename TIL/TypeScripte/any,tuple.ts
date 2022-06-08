const array : [string, number] = ["injae" , 22]

array.push()

const secondArray : readonly [string, number] = ["injae" , 22]

// secondArray.push("123") // 오류발생

let A = [1,2,3,4]
let B = true

// A+B 에러발생

let a : any = [1,2,3,4]
let b : any = false

a+b // any를 사용했기 때문에 일반 자바스크립트 처럼 구동

//최대한 any사용을 지양해야 하지만 요긴하게 쓰일 때도 있다.
