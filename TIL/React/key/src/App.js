import React, { useState } from "react";
import "./app.css"

function App() {
  const [inputValue, setInputValue] = useState("")
  const [list, setList] = useState(["코딩", "밥", "잠"])
  const addToList = () => {
    setList((currentValue) => {
      return [...currentValue, inputValue]
    });
    setInputValue("");
  }

  return (
    <>
      <div className="appDiv">
        <div className="withoutError">
          <h1>키 값 에러 없이</h1>
          <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          <button onClick={addToList}>추가</button>
          <ul>
            {list.map((string) => {
              return (
                <li>{string}</li>
              )
            })}
          </ul>
        </div>
        <div className="indexError">
          <h1>키 값 index</h1>
          <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          <button onClick={addToList}>추가</button>
          <ul>
            {list.map((string) => {
              return (
                <li>{string}</li>
              )
            })}
          </ul>
        </div>
        <div className="overlapError">
          <h1>키 값 중복</h1>
          <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          <button onClick={addToList}>추가</button>
          <ul>
            {list.map((string) => {
              return (
                <li>{string}</li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
