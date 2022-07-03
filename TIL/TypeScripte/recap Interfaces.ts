// Type Aliases과 Interfaces의 차이점

// Type Aliases과 인터페이스는 매우 유사하며 많은 경우 자유롭게 선택할 수 있습니다. 
// 인터페이스의 거의 모든 기능은 type에서 사용할 수 있으며, 주요 차이점은 type을 다시 열어 새 속성을 추가할 수 없는 것입니다. 
// 반면 인터페이스는 항상 확장 가능합니다.

type PlayerA = {
    name: string
}

type PlayerAA = PlayerA & {
    age : number
}

const user1 : PlayerA = {
    name: "raqiya",
}

const user2 : PlayerAA = {
    name: "raqiya",
    age : 23
}

interface PlayerB {
    name: string
}

interface PlayerBB extends PlayerB {
    age : number
}

const user3 : PlayerBB = {
    name: "mimi",
    age : 26
}