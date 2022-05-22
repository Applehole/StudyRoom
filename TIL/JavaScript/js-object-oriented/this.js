let kim ={
    name: "kim",
    first : 10,
    second : 20,
    sum: function(a,b){
        return a+b;
    }
}
console.log(kim.sum(kim.first,kim.second))

let Kimchi ={ // this란 객체에서 자신을 나타내기 위해서 명시적으로 만들어주는 것
    name: "kim",
    first : 10,
    second : 60,
    sum: function(){
        return this.first + this.second;
    }
}

console.log(Kimchi.sum())