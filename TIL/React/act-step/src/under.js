import React from "react";
import { useState, useEffect } from "react";
import Base from "./Base"

console.log("here is under component 2")
function Under() {
  const [act, setAct] = useState([])
  useEffect(()=>{
    console.log("under useEffect 8")
    setAct(["a","b","c","d"])
  },[])
  console.log("here is under app 5")
  return (
    <div className="App">
      <div>Under</div>
      {act.map((el)=>{
        console.log("here is under map",el)
      })}
      <Base />
    </div>
  );
}

export default Under;
