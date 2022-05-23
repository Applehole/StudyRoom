const rotatedArraySearch = function (rotated, target) {

    let left = 0
    let right = rotated.length - 1

    while (left <= right) {
        let middle = parseInt((left + right) / 2)

        if (rotated[middle] === target) {
            return middle
        }
        if (rotated[left] < rotated[middle]) {
            if (target < rotated[middle] && rotated[left] <= target) {
                right = middle - 1;
            } else {
                left = middle + 1;
            }
        } else {
            if (target <= rotated[right] && rotated[middle] < target) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }
    }

    return -1;
}
