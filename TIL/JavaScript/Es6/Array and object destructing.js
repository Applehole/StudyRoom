const ArrayAndObjectDestructingPractice ={
    first :1,
    second : 2,
    third: 3
}

//es5
let one = ArrayAndObjectDestructingPractice.first
let two =ArrayAndObjectDestructingPractice.second
let three =ArrayAndObjectDestructingPractice.third

console.log(one, two, three)

//es6
let {first, second ,third} = ArrayAndObjectDestructingPractice

console.log(first, second ,third)