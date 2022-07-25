function solution(clothes) {
    let tempArray = []
    let tempNumberArray = []

    for (let i = 0; i < clothes.length; i++) {
        if (tempArray.includes(clothes[i][1])) {
            tempNumberArray[tempArray.findIndex((el) => el === clothes[i][1])] = tempNumberArray[tempArray.findIndex((el) => el === clothes[i][1])] + 1
        } else {
            tempArray.push(clothes[i][1])
            tempNumberArray.push(1)
        }
    }
    if (tempArray.length === 1) {
        return clothes.length
    }
    let creduceEveryNumber = tempNumberArray.reduce((cur, acc) => {
        return cur = cur * acc
    }, 1)

    return clothes.length + creduceEveryNumber
}

solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"], ["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]])