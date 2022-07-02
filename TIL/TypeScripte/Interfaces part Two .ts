// abstract class User {
//     constructor(
//         protected firstname: string,
//         protected lastname: string
//     ){}
//     abstract sayHi(name:string):string
//     abstract fullname() : string
// }

// class Player extends User {
//     fullname(){
//         return `${this.lastname} ${this.firstname}`
//     }
//     sayHi(name:string){
//         return `Hello ${this.lastname} ${this.firstname},nice to meet you }`
//     }
// }

interface User {
    firstname: string,
    lastname: string
    sayHi(name:string):string
    fullname() : string
}

interface Human {
    health : string
}

class Player implements User, Human {
    constructor(
        public firstname: string,
        public lastname: string,
        public health: string,
    ){}
    fullname(){
        return `${this.lastname} ${this.firstname}`
    }
    sayHi(name:string){
        return `Hello ${this.lastname} ${this.firstname},nice to meet you }`
    }
}