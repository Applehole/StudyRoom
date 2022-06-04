const useState = (initialValue) => {
    let value = initialValue;
    
    const state = () => value;
  
    const setState = (newValue) => {
      value = newValue;
    };
    
    return [state, setState];
  };
  
  
  const [counter, setCounter] = useState(0);
  
  console.log(counter()); // 0
  setCounter(1);
  console.log(counter()); // 1

//다만 state가 getter 방식의 함수로 구현됐습니다.
//실제 useState와 동일하게 만들려면 state를 함수가 아닌 변수로 선언해야 합니다.