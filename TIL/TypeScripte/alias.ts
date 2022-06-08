
//const나 let 타입의 정의
type PlayerAge = number
type PlayerName = string 

type Player ={
    readonly name:PlayerName,
    age?:PlayerAge
}

const nico : Player ={
    name:"nico"
}

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