import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    return {value}
  };
  const name = useInput("Mr")
  return (
    <div className="App">
      <h1>Hello </h1>
      <input placeholder="name" value={name.value} /> 
    </div>
  );
}
