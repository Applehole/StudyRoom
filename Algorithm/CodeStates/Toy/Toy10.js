const binarySearch = function (arr, target) {
    // TODO : 여기에 코드를 작성합니다.
    let left = 0
    let right = arr.length-1
    while(left <= right){
      let mid =parseInt((left+right)/2)
      if(arr[mid]===target){
        return mid
      }
      if(arr[mid]>target){
        right = mid -1
      }else{
        left = mid + 1
      }
      console.log("mid",mid)
    }
    return -1
  };

  function findIndex (a,b){
      return a.findIndex((el)=>{
          console.log("findIndex",el)
          return el=== b
      })
  }


  let A=[1,2,3,4,5,6,7,8,9,10]
  let B= 9

  findIndex(A,B)

  binarySearch(A,B)
  