const promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve("resolve");
    }, 3000);
  });
  
  promise1.then(value => console.log(value));
  // 3초 후에 결과가 출력
  // resolve

  const promise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      reject("reject");
    }, 3000);
  });
  
  promise2.then(result => console.log(result)).catch(error => console.log(error));
  // 3초 후에 결과가 출력
  // reject

  const promise3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject("싫어요");
    }, 3000);
  });
  
  promise3
  .then(result => console.log(result))
  .finally(()=>console.log("작동된다"))
  .catch(error => console.log(error));
  // 3초 후에 결과가 출력
