function Person(name, first, second, third){
    this.name=name;
    this.first=first;
    this.second=second;   
}
 
Person.prototype.sum = function(){
    return 'prototype : '+(this.first+this.second);
}
 
var kim = new Person('kim', 10, 20);
kim.sum = function(){
    return 'this : '+(this.first+this.second);
}
var lee = new Person('lee', 10, 10);
console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());

// 객체 안에 새로운 함수를 작성하는 것은 매 번 다시 만들어줘야 하기때문에, 프로토타입으로 한번만 지정을 해줘서
// 공간복잡도, 메모리 문제를 해결해야한다.