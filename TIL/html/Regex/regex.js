const re = /\w+\s/g;
const str = 'fee fi fo fum';
const myArray = str.match(re);
console.log(myArray);

// ["fee ", "fi ", "fo "]