function solution(numbers) {
    let result = []
    let numberArray = numbers.split("")

    function Permutation(arr, r) {
        const result = [];
        if (r === 1) return arr.map((num) => [num]);
        arr.forEach((fixed, index, org) => {
            const rest = [...org.slice(0, index), ...org.slice(index + 1)];
            const permutation = Permutation(rest, r - 1);
            const attached = permutation.map((numbers) => [fixed, ...numbers]);
            result.push(...attached);
        });
        return result;
    }
    for (let z = numberArray.length; z > 0; z--) {
        let EveryOption = Permutation(numberArray, z)
        let changeToNormalNumber = EveryOption.map((el) => {
            return Number(el.reduce((acc, cur) => {
                return acc = acc + cur
            }, ""))
        })
        let ErasedOverlap = [...new Set(changeToNormalNumber)]
        for (let i = 0; i < ErasedOverlap.length; i++) {
            if (checkPrime(ErasedOverlap[i])) {
                result.push(ErasedOverlap[i])
            }
        }
    }

    return [...new Set(result)].length

    function checkPrime(number) {
        if (number < 2) {
            return false
        }
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                return false
            }
        }
        return true
    }
}