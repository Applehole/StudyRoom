// HostingSample();
// HostingExample("first");

// function HostingSample() {
//   console.log("hahahha");
// }
// const HostingExample = (el) => {
//   console.log(el);
// };

// HostingExample("second");

// let A = "x";
// console.log(A);
// {
//   let A = "y";
//   console.log(A);
// }
function something() {
  let funcExpressed = "to be a function";

  function funcDeclared() {
    return "this is a function declaration";
  }

  funcExpressed = function () {
    return "this is a function expression";
  };
  console.log(1, funcDeclared());
  console.log(2, funcExpressed());
  console.log(3, funcExpressed);
}
something();
