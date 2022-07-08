function solution(nums) {
    let result = 1;
    let lowestNumber = Math.min(...nums);
    for(let i=1; i<=lowestNumber; i++){
        let filteredNumbers = nums.filter((number)=>{
            return number%i
        })
        if(filteredNumbers.length===0){
            result = i
        }
    }
    return result
}

solution([10, 20, 15, 30])