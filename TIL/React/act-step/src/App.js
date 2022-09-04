import { useState, useEffect } from "react";
import React from "react";
import Under from "./under"

console.log("here is app component 3")
function App() {
  const [act, setAct] = useState([])
  useEffect(()=>{
    console.log("app useEffect 9")
    setAct([1,2,3,4])
  },[])
  console.log("here is app 4")
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
