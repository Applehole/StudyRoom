class Person{
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum(){
        return this.first+this.second;
    }
}
class PersonPlus extends Person{
    constructor(name, first, second, third){
        super(name, first, second);
        this.third = third;
    }
    sum(){
        return super.sum()+this.third;
    }
    avg(){
        return (this.first+this.second+this.third)/3;
    }
}
 
var kim = new PersonPlus('kim', 10, 20, 30);
console.log("kim.sum()", kim.sum());
console.log("kim.avg()", kim.avg());

//extend를 쓰면 상속이 가능해서 재활용에 용이하다.

// super을 쓰면 상속이 되는데 왜 쓰냐면 parameters를 추가해주기 위해서 쓴다.

//extend와 super의 차이는 말 그대로 확장이 되는거고, 확장을 하면 함수를 만들어줄 수 있지만, 인자를 추가하려면 
// super을 써서 하나씩 넣어줘야한다.