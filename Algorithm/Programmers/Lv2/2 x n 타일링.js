function solution(n) {
    const arr = [0, 1, 2];
      if (n <= 2) return arr[n];
      for(let i=3; i<=n; i++){
          arr[i] = (arr[i-1] +arr[i-2]) % 1000000007
      }
      return arr[n]
  }