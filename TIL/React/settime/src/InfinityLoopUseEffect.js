import react, { useEffect, useState } from "react";

function INFUseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("in", count);
    setCount((prev) => prev + 1);
  }, [count]);

  console.log("out", count);

  return <div className="App"></div>;
}

export default INFUseEffect;
