import { useState, useEffect } from "react";
import React from "react";

console.log("here is component")
function App() {
  const [act, setAct] = useState([])
  useEffect(()=>{
    console.log("useEffect")
    setAct([1,2,3,4])
  },[])
  console.log("here is app")
  return (
    <div className="App">
      <div>practice</div>
      {act.map((el)=>{
        console.log("here is map",el)
      })}
    </div>
  );
}

export default App;
