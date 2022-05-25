function solution(numbers, target) {
   let Storage = []
   let finalAnswer = 0
   
   function something(count, result, Array){
       if(Array.length===0){
           Storage.push(result)
           return
       }
       let head = Array [0]
       let tail = Array.slice(1)
       
       something(count-1, result.concat(head), tail )
       something(count-1, result.concat(-head), tail )
   }
   something(numbers.length, [], numbers)
   
   Storage.map((el)=>{
       let sum =el.reduce((acc,cur)=>{
          return acc= acc+cur 
       },0)
       if(sum===target){
           finalAnswer++
       }
   })
   
   return finalAnswer
}