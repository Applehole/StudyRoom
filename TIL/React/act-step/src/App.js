import { useState, useEffect } from "react";
import React from "react";
import Under from "./under"

console.log("here is app component")
function App() {
  const [act, setAct] = useState([])
  useEffect(()=>{
    console.log("app useEffect")
    setAct([1,2,3,4])
  },[])
  console.log("here is app")
  return (
    <div className="App">
      <div>practice</div>
      {act.map((el)=>{
        console.log("here is app map",el)
      })}
      <Under />
    </div>
  );
}

export default App;
