let number = 0 // 첫번째 식
function addNumber () {
    number++
    return number
}

function tempFunction (){ // 두번째 식
    let number2 = 0
    function addNumber2 (){
        number2++
        return number2
    }
}