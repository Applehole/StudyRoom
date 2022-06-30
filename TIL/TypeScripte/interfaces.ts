type Team = "red" | "blue" | "white"
type Health = 1 | 5 | 10 | 15

interface player {
    name : string,
    age : number,
    team : Team
    health : Health
}

interface player { // interface 는 두개를 알아서 합쳐준다.
    something : string
}

const newPerson : player = {
    name : "nico",
    age : 94,
    team : "red",
    health : 15 ,
    something :"haha"
}