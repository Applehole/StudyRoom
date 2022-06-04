const balancedBrackets = function (str) {
    const stack = []; //배열을 만들어준다.
    const opener = { // 객체에 3가지가 있다.
      '{': '}',
      '[': ']',
      '(': ')',
    };
    const closer = '}])'; // 닫는 건 3가지
  
    for (let i = 0; i < str.length; i++) {// i는 배열의 길이만큼 돌아간다.
      if (str[i] in opener) {// 만약 현재 위치가 opener에 있으면
        stack.push(str[i]); // 배열에 추가시킨다.
      } else if (closer.includes(str[i])) { // 그게 아니면 닫는 것이 있는지 구한다.
        const top = stack.pop(); // 스택에 하나를 없앤다
        const pair = opener[top];// 페어에 없앤 위치의 오프너를 넣는다.
        if (pair !== str[i]) { // 만약 페어와 str[i]가 같지않다면
          return false; // false 를 낸다.
        }
      }
    }
    return stack.length === 0; // 스택의 길이가 0이라면 트루다
  };