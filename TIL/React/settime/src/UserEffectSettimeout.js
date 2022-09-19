import React, { useEffect, useState } from "react";

function UseEffectSetTimeOut() {
  const [position, setPosition] = useState("");
  useEffect(() => {
    console.log("1 첫번째");
    console.log("1 position", position);
  });

  useEffect(() => {
    setPosition("업데이트");
    console.log("2 position", position);
    console.log("2 두번째");
  });

  useEffect(() => {
    setTimeout(() => {
      setPosition("다른건데");
      console.log("여기가 setTimeout");
    }, 1000);
    //무한루프인데??
    console.log("3 position", position);
  }, []);

  return <div className="App"></div>;
}

export default UseEffectSetTimeOut;
