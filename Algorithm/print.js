function getTime(s) {
let timeCount = 0;
let currenPosition = 0; //1
let alphabet ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"

for(let i=0; i < s.length; i++) {

    let a = alphabet.indexOf(s[i])

    let position = Math.abs(currenPosition - a)
    let secondPosition = Math.abs(26-position)   

    if(position<secondPosition) {
        timeCount+=position
        currenPosition = a;
    } else {
        timeCount+=secondPosition;
        currenPosition = a;
    }
}
return timeCount;    
}

getTime("AZGB")