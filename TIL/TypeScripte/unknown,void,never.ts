let a1 : unknown;

// a1+1 // a1이 unknown이라서 오류가 생김

if(typeof a1 === "number"){
    a1+1
}

if( typeof a1 ==="string"){
    a1.toUpperCase();
}


function something () : void{
    console.log("haha")
} // something에 마우스를 올려두면 void라는 타입을 확인 할 수 있다.
//void는 리턴이 되지 않으면 자동으로 확인을 시켜주는 개념이다.
//또한 명시적으로 적어주어도 괜찮다.


let neverType : string|number;

function neverTypeCheck(){

    if(typeof neverType === "string"){
        neverType // 마우스를 올려보면 string이 나온다.
    }else if(typeof neverType ==="number"){
        neverType// 마우스를 올려보면 number가 나온다.
    }else{
        neverType// 마우스를 올려보면 never가 나온다.
        //never은 아무것도 되지않는 것?
    }
}