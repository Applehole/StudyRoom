function solution(p) {
    if (p.length === 0) {
        return []
    }
    if (checkArray(p)) {
        return p
    }
    let left = 0
    let right = 0
    let storage = ""
    while (p.length) {
        for (let i = 0; i < p.length; i++) {
            if (p[i] === "(") {
                left++
            }
            if (p[i] === ")") {
                right++
            }
            if (left !== 0 && left === right) {
                const slicedArray = p.slice(0, i+1)
                if (checkArray(slicedArray)) {
                    storage += slicedArray
                    left = 0
                    right = 0
                    p = p.slice(i+1)
                    break
                } else {
                    for (let z = 0; z < slicedArray.length; z++) {
                        if (slicedArray[z] === "(") {
                            storage += ")"
                        } else {
                            storage += "("
                        }
                    }
                    left = 0
                    right = 0
                    p = p.slice(i+1)
                    break
                }
            }
        }
    }
    return storage
    function checkArray(string) {
        let tempStorage = [string[0]]
        for (let i = 1; i < string.length; i++) {
            if (tempStorage[tempStorage.length - 1] === "(" && string[i] === ")") {
                tempStorage.pop()
            } else {
                tempStorage.push(string[i])
            }
        }
        return tempStorage.length ? false : true
    }
}

solution("()))((()")