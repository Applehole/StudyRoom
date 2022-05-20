function gcd1(a,b){
    let c = 0; 
    console.time("1code_measure")
    while(b !== 0){ 
      c = a % b; 
      a = b; 
      b = c; 
    } 
    console.timeEnd("1code_measure")
    return a; 
  }

  function gcd2(a,b){ 
    console.time("2code_measure")
    return b ? gcd2(b, a%b) : console.timeEnd("2code_measure"); 
  }
  
  // Arrow function 사용해보기.
  const gcd3 = (a,b) => b ? gcd3(b, a%b) : a;

gcd1(95132148,156)
gcd2(95132148,156)