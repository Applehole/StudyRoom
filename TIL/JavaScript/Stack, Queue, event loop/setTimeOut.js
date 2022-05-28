function setTimeoutFunction1(){
    console.log(1)
    setTimeout(function(){console.log(2)},5000)
    console.log(3)
    setTimeout(function(){console.log(4)},1000)
}

setTimeoutFunction1()