//생각해보니 너무 쉬운데?
function Each99dan (Number) {
    let result = []
    for(let i=1; i<10; i++){
       class factory99dan{
           constructor (counter ,number){
               this.counter = counter;
               this.number = number;
           }
       }
       let tempResult = new factory99dan (i, Number*i)
       console.log(tempResult)
       result.push(tempResult)
    }
    console.log(result)
    return result
}

Each99dan(9)