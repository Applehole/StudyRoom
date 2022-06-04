function func() {
    for (var i=1; i<5; i++) {
      setTimeout(function() { console.log(i); }, i*500);
    }
  }
  func(); // 5 5 5 5

//   function func() {
//     for (var i=1; i<5; i++) {
//       console.log(i);
//     }
//   }
//   func(); // 5 5 5 5