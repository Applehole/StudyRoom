type Add1 = { // 여러개의 타입을 가지는 것을 오버로딩이라고 칭한다.
    (a:number, b:number) : number
    (a:number, b:string) : number
}

const add4: Add1 = (a , b) => { // 타입이 다르다면 해당 분기를 다르게 해줘야 한다.
    if(typeof(b)==="string"){
        return a
    }
    return a+b
}

type Add2 = { 
    (a: number, b: number) :number
    (a: number, b: number, c:number) :number
}

const add5 : Add2 = ( a , b , c?:number ) =>{ // 파라미터가 여러개라면 지정을 해줘야 한다.
    if(c) return a+b+c
    else{
        return a+b
    }
}