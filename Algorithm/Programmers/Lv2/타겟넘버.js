function solution(numbers, target) { // 타겟을 빼서 모든 경우의 수를 만든 다음, 경우의 수만큼 더해준다.
    var answer = 0;
    const AddEveryThing = numbers.reduce((acc,cur)=>{
       return acc = acc+cur 
    },0)
    console.log(AddEveryThing)
    const GapOfNumber = AddEveryThing-target
    
  let MathClass=[]
  let Storage=[[]]
  
   for(let i=0; i<numbers.length; i++){
     for(let j=0; j<Storage.length; j++){
        MathClass.push([...Storage[j],numbers[i]])
     }
     Storage = Storage.concat(MathClass)
     MathClass=[]
   }
    Storage.map((el)=>{
       let number = el.reduce((acc,cur)=>{
            return acc = acc+cur
        },0)
       if(number === GapOfNumber){
           answer++
       }
    })
    return answer;
}