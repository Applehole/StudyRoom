//export {sayHi, sayBye}; // 두 함수를 내보냄
function sayHi(user) {
  console.log(`Hello, ${user}!`);
}

function sayBye(user) {
  console.log(`Bye, ${user}!`);
}

export { sayHi, sayBye }; // 두 함수를 내보냄
