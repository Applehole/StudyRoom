let A = "나는 전역 변수 A이다."
let B = "나는 전역 변수 B이다."
let C = "나는 전역 변수 C이다."
const D = "나는 전역 변수 D이다."


function first (){
    console.log("first A출력" , A)
    A = "난 first 함수의 A이다."
    B = "난 first 함수의 B이다."
    console.log("first A출력" , A)

    function second (){
        B = "난 second 함수의 B이다."
        console.log("second A출력" , A)
        function third (){
            A = "난 third 함수의 A이다."
            console.log("third C출력" , C)
            function forth (){
                console.log("forth B출력" , B)
                console.log("forth D출력" , D)
            }
            forth()
        }
        third()
    }
    second()
}
first()