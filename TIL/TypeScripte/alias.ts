
//const나 let 타입의 정의
type PlayerAge = number // 타입을 정의하고 싶으면 type을 앞에 써주면 된다.
type PlayerName = string 

type Player ={
    readonly name:PlayerName, // 호출만 가능하고, 변경이 불가능 해진다.
    age?:PlayerAge
}

const nico : Player ={
    name:"nico"
} // 

const injae : Player ={
    name:"injae",
    age:22
}

function PlayerMaker(name:string) : Player {
    return{
        name
    }
}

const PlayerMaker2 =(name: string) : Player =>{
    return{
        name
    }
}

const minjae = PlayerMaker("minjae")
minjae.age = 12

const jamin = PlayerMaker2("jamin")
jamin.age = 18