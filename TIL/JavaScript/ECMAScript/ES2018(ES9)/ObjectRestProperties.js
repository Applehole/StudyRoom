// 스프레드 문법은 2015년에 추가가 되었다.
// 하지만 18년도에 객체인 Object에도 추가가 되어서 사용을 할 수 있게 되었다.

const TempObject =
{a:"안녕",
 b:"하세요",
 c:"선생님",
 d:"안녕친구야"
}

const OriginalObject = {내가진짜야:"맞아", ...TempObject}

console.log(OriginalObject)

const obj = { x: 11, y: 22, z: 33 };
const { x, ...args } = obj;
console.log(x); // 11
console.log(args); // {y: 22, z: 33}