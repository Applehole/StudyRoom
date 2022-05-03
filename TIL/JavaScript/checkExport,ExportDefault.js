import { sayHi, sayBye as bye } from "./export.js";
import add from "./exportDefault.js";

let a = 10,
  b = 5;

// console.log(AddFunction(a, b));
sayHi("안녕");
bye("잘가");
console.log(add(a, b));
// console.log(minus(a, b));
