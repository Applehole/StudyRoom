const randomValue = [1,4,5,2]

function AminusB(a,b){ // 오름차순
    console.log("a",a)
    console.log("b",b)
    console.log("ab",a-b)
    // 양수 = b 가 a보다 앞에 있어야한다.
    // 0 = 가만히 있는다.
    // 음수 = a 가 b보다 앞에 있어야한다.
    return a-b
}

function BminusA(a,b){ //내림차순
    return b-a
}

console.log("AminusB", randomValue.sort(AminusB))
// console.log(BminusA, randomValue.sort(BminusA))