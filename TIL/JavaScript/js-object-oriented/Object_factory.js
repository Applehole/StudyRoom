function Person(name, first, second){ 
    this.name=name;
    this.first=first;
    this.second=second;
    this.sum = function(){
        return `hellow ${this.first+this.second};`
    }
}
 
var kim = new Person('kim', 10, 20);
var lee = new Person('lee', 10, 10);
console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());

// constructor function은 객체를 더욱쉽게, 여러 번 치지 않게 하기 위해서 만드는 함수이다
// new를 앞에 붙여야지만 객체가 완성이 되며, 없이 치면 undeifined로 나온다.

