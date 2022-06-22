// type superPrint ={
//     (arr: number[]):void
//     (arr: boolean[]): void
// }

type superPrint = {
    <T>(arr : T[]): void
}

const SuperPrint :superPrint = (arr) =>{
    arr.forEach((el)=>console.log(el))
}

SuperPrint([1,2,3,4])
