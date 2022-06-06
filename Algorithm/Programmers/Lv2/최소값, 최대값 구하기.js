function solution(s) {
    const splitArray = s.split(" ").map((el)=> Number(el))
    return `${Math.min(...splitArray)} ${Math.max(...splitArray)}`
}