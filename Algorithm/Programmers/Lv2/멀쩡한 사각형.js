function solution(w, h) {
    
    return w*h-(w+h-gcd(w,h))
    
    function gcd(a,b){ 
     let c = 0; 
     while(b !== 0){ 
      c = a % b; 
      a = b; 
      b = c; 
     } 
     return a; 
}
    
}