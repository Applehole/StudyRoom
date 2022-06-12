const NormlaArray = {
    A : "a",
    B : "b",
    C : "c",
    D : "d",
}

let temp = Object.entries(NormlaArray)
console.log(Object.entries(NormlaArray))

const fruits = {Bananas:300, Oranges:200, Apples:500};

let text = "";
for (let [fruit, value] of Object.entries(fruits)) {
text += fruit + ": " + value + "";
}
console.log(text)