function add1 ( a:number , b:number ){ // number의 값을 지정함으로써 오류 제거
    return a+b;
}

const add2 = ( a:number , b:number ) => a+b // 화살표함수도 똑같다

type Add = (a:number, b:number) => number // 여기서 타입을 지정하고

const add3 :Add = (a,b) => a+b // 타입을 넣어주는 것도 똑같으며

//함수위에 마우스를 올렸을때 문구가 뜨는 것을 콜 시그니쳐라고 부른다.

