import React, { useEffect, useState } from "react";

function UseEffectState() {
  const [position, setPosition] = useState("");
  useEffect(() => {
    console.log("1 첫번째");
    console.log("1 position", position);
  });

  useEffect(() => {
    setPosition("업데이트");
    console.log("2 두번째");
    // 멈추고 올라가는지, 아니면 전체를 돌고 올라가는지
    //결과는 멈추고 올라가지 않고 전부 돌고 올라간다.
  });

  useEffect(() => {
    // 그러면 여기 state는 어떻게 되는걸까?
    console.log("3 position", position);
    console.log("3 세번째");
  });

  //해당 컴포넌트로 알 수 있는 사실
  // useEffect는 위에서 아래로 실행된다.

  return <div className="App"></div>;
  //처음 돌때에는 useState가 들어가지 않는다.
}

export default UseEffectState;
