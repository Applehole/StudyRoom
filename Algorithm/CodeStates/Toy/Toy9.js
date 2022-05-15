function power(base, exponent) {
    // base가 밑이고 exponent가 제곱이다.
    if (exponent === 0){ 
      //밑 변의 뭐가 와도 0제곱을하면 1이다. 이건 고등학교 수학 ㅇㅈ? 
      return 1;
    }
  
    const half = parseInt(exponent / 2); 
    //parseInt는 소숫점을 없애준다. O(logN)을 구할 때 항상
    //나누기 2를 하면서 탐색하기 때문에 소숫점 처리를 반드시 해줘야한다.
    const temp = power(base, half);
    //재귀에 들어갈때 인자값을, 밑변은 그대로 다시 들어가고, 제곱을 2로나눈 값으로 넣어준다.
    
    const result = (temp * temp) % 94906249;
    // %연산에 의해서 (temp * temp)의 나머지를 구하더라도 9406249보다 작으면 다시 (temp * temp)가 출력된다. 
    //(작으니까) 1 % 100 = 1 , 50 % 100 = 50
  
    if (exponent % 2 === 1){
      //2로 항상 나누고 소수점을 띠어버리기 때문에 나머지가 1이 계속나온다.
      return (base * result) % 94906249;
      // 밑을 (temp * temp) % 94906249;의 결과로 곱 해준다.
      // 여기서 중요한데 이것이 power()의 return이 된다는 것.
      // 다시 temp의 return이 전달되고 반복 된다.
    }
    
    else{
      return result;
    }
  }

  power(2,20)