const largestProductOfThree = function (arr) {
    arr.sort((a,b)=>a-b)
    let number=arr.length
    return arr[number-1]*arr[number-2]*arr[number-3]>arr[number-1]*arr[0]*arr[1] 
    ? arr[number-1]*arr[number-2]*arr[number-3]
    : arr[number-1]*arr[0]*arr[1]
  };
  