// ES5
function helloFunction(name) {
	return '안녕' + name;
}

console.log(helloFunction('영희'));


// ES6 화살표 함수
const myFunc1 = (name) => {
	return `안녕 ${name}`;
}
console.log(myFunc1('철수')); // 출력 => 안녕 철수

// 또는 화살표를 사용하거나 'return' 키워드를 사용하지 않아도 됩니다
// 불필요한 코드를 제거함으로써 가독성을 높혀준다.
const myFunc2 = (name) => `안녕 ${name}`;
console.log(myFunc2('철수')); // 출력 => 안녕 철수