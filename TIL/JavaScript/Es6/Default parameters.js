function DefaultParametersFunction1(first, second){
    console.log(`히히 ${first} ${second}!`)
}

function DefaultParametersFunction2(first, second="발싸!"){
    console.log(`히히 ${first} ${second}!`)
}

DefaultParametersFunction1("야 날좀 바라봐") //히히 야 날좀 바라봐 undefined!
DefaultParametersFunction2("야~~") //히히 야~~ 발싸!!