import React, { useEffect } from "react";

function UseEffectState() {
  useEffect(() => {
    console.log("1 첫번째");
  });

  useEffect(() => {
    console.log("2 두번째");
  });

  useEffect(() => {
    console.log("3 두번째");
  });

  //해당 컴포넌트로 알 수 있는 사실
  // useEffect는 위에서 아래로 실행된다.

  return <div className="App"></div>;
}

export default UseEffectState;
