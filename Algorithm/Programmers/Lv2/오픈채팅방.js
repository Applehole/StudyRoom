function solution(record) {
    var answer = [];
    let userNameMemory = {}
    
    for(let i=0; i<record.length; i++){
        if(record[i].split(" ").length === 3){
            userNameMemory[record[i].split(" ")[1]] = record[i].split(" ")[2]
        }
    }
    for(let i=0; i<record.length; i++){
        let action = record[i].split(" ")[0]
        let id = record[i].split(" ")[1]
        InOrOutPerson(action,id)
    }
    
    function InOrOutPerson(action,id){
        if(action==="Enter"){
           answer.push(`${userNameMemory[id]}님이 들어왔습니다.`)
        }
        if(action==="Leave"){
           answer.push(`${userNameMemory[id]}님이 나갔습니다.`)
        }
    }
    
    return answer;
}