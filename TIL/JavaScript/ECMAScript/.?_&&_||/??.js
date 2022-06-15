const no = false
const yes = true
const zero = 0
const one = 1

//||

console.log("||",no||yes)
console.log("||",yes||yes)
console.log("||",zero||zero)
console.log("||",null||undefined) // ||는 앞에 값이 falsy값이면 뒤의 값이 무조건 출력된다.

// &&

console.log("&&",no&&yes)
console.log("&&",yes&&yes&&"hellow")
console.log("&&",yes&&yes&&undefined&&yes&&yes)

//결론
// || 논리 연산자는 맞는 값을 찾으면 바로 리턴을 한다.
// 만약 맞는 값이 없다면 제일 뒤의 값을 반환한다.
// && 논리 연산자는 틀린 값이 있으면 바로 리턴을 한다.
// 만약 틀린 값이 없다면 제일 뒤의 값을 반환한다.



//?.

const person={
    name:"인재",
    age:20,
    city:{
        광양:"그 어디"
    }
}

console.log(person.city.광양)
console.log(person.city?.서울)
// 그냥 적으면 오류가 난다.
// 하지만 ?.를 쓰면 오류를 제거할 수 있다.
// 제일 처음 객체에는 쓰지않는다. => 그냥은 undefined가 출력되기 때문이다.
// ex) person?.name => 이런식으로 쓰면 안된다. 의미가 없다.

//??

console.log("??",yes??no)
console.log("??",no??no)
console.log("??",undefined??yes)
console.log("??",undefined??null)

//??는 undefined와 null만 걸러준다.
// 그 외에는 || 연산자를 쓰는게 더 좋을 것 같기는 하다.