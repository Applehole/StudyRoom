// 나오는 개념들은 객체지향 프로그래밍에서 조금씩 나왔다.

//종류에는 3가지 종류가 있다.
// public, private, protected

abstract class User {
    constructor(
    public hello:string,
    private age:number,
    protected nickname:string
    ) {}
    abstract getNickName():void
    getFullName() {
    return `${this.hello} ${this.nickname}`
    }
}
    
// 상속 받을 수 있는 것을 만들어낸다,
// 하지만 새로운 객체 자체를 만들어 낼 수 있는 것은 아니다.
// const UserNico = new User ("haha", 23, "korea") 에러가 나온게된다.

class Player extends User {
    getNickName(): void {
        console.log(this.nickname)
    }
}


const nico = new Player("haha", 23, "korea")

// 컴파일이 자바스크립트로 되면서 this로 바인딩이 된다.

// "use strict";
// class Player {
//     constructor(name, age, country) {
//         this.name = name;
//         this.age = age;
//         this.country = country;
//     }
// }
// const nico = new Player("haha", 23, "korea");


// this로 변환이 되면 public과 private 의 의미가 없지않나? 라고 생각하겠지만,
// 타입스크립트에서 방어를 해주기 때문에 의미가 있는 것이다.
// nico.name가 오류가 뜬다.

