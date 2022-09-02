import React from "react";
import { useState, useEffect } from "react";

console.log("here is Base component")
function Base() {
  const [act, setAct] = useState([])
  useEffect(()=>{
    console.log("Base useEffect")
    setAct(["a","b","c","d"])
  },[])
  console.log("here is Base app")
  return (
    <div className="App">
      <div>Base</div>
      {act.map((el)=>{
        console.log("here is Base map",el)
      })}
    </div>
  );
}

export default Base;
