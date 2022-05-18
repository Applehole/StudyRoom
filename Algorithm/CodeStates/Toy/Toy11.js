const powerSet = function (str) {
    // TODO: 여기에 코드를 작성합니다.

    let current=[]
    let Storage=[[]]
  
     for(let i=0; i<str.length; i++){
       for(let j=0; j<Storage.length; j++){
          current.push([...Storage[j],str[i]])
       }
       Storage = Storage.concat(current)
       current=[]
     }
     console.log(Storage)
    return Storage.map((Element)=>{
        return Element.reduce((acc,cur)=>{
             return acc = acc + cur
         },"")
     }).sort()
  };
  
  powerSet("abc")