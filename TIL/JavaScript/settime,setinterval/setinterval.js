//Hello!라는 문자열을 콘솔에 3초에 1번씩 실행합니다.
// function test() {
//   console.log("Hello!");
// }
// setInterval(test, 3000);
// clearInterval(test);

// var interval = function something() {
//   setInterval(function () {
//     console.log("Interval");
//   }, 1000);
// };

// //인자로 함수 이름 넣어줍니다.
// clearInterval(interval);
// let count = 1;
// var interval = setInterval(function () {
//   count++;
//   if (count === 10) {
//     clearInterval(interval);
//   }
//   console.log(count);
// }, 1000);

function test(string) {
  console.log(string);
}
setInterval(function () {
  test("Hello!");
}, 3000);

function test1(string) {
  console.log("test1 : " + string);
}

function test2(string) {
  console.log("test2 : " + string);
}

setInterval(function () {
  test1("Hello!");
  test2("World!");
}, 3000);
// //위와 같이 setInterval 함수 안에 함수를 인자로 넣고 실행하면 두개의 함수가 3초에 한번씩 실행됩니다.

// 결론 setInterval은 주기적으로 호출을 하는 함수이고, 그렇기 때문에 clearInterval을 넣어주지 않으면
// 무한루프처럼 계속 돈다.
// 계속 돌아가는 반복문 사이클이다.
