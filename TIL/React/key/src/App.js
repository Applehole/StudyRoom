import React, { useState } from "react";
import "./app.css"
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [withoutErrorValue, setWithoutErrorValue] = useState("")
  const [indexErrorValue, setIndexErrorValue] = useState("")
  const [overlapErrorValue, setOverlapErrorValue] = useState("")
  const [withoutlist, setWithoutList] = useState(["키값이 없어","여기는 에러가 생기겠지"])
  const [indexlist, setIndexList] = useState(["인덱스 에러가 생겨","맞아"])
  const [overlapList, setOverlapList] = useState(["중복값이 들어가면 생겨","그래?"])

  const withOutAddToList = () => {
    setWithoutList((currentValue) => {
      return [withoutErrorValue , ...currentValue]
    });
    setWithoutErrorValue("");
  }
  const IndexAddToList = () => {
    setIndexList((currentValue) => {
      return [indexErrorValue , ...currentValue]
    });
    setIndexErrorValue("");
  }
  const overLapAddToList = () => {
    setOverlapList((currentValue) => {
      return [overlapErrorValue, ...currentValue ]
    });
    setOverlapErrorValue("");
  }

  return (
    <>
      <div className="appDiv">
      <div className="withoutError">
          <h1>키값이 존재하지 않음</h1>
          <input value={withoutErrorValue} onChange={(e) => setWithoutErrorValue(e.target.value)} />
          <button onClick={withOutAddToList}>추가</button>
          <ul>
            {withoutlist.map((string) => {
              return (
                  <li>{string}</li>
              )
            })}
          </ul>
        </div>
        <div className="indexError">
          <h1>키 값 index</h1>
          <input value={indexErrorValue} onChange={(e) => setIndexErrorValue(e.target.value)} />
          <button onClick={IndexAddToList}>추가</button>
          <ul>
            {indexlist.map((string, index) => {
              return (
                <div key={index}>
                  <li>{string}</li>
                  <input/>
                </div>
              )
            })}
          </ul>
        </div>
        <div className="overlapError">
          <h1>키 값 중복</h1>
          <input value={overlapErrorValue} onChange={(e) => setOverlapErrorValue(e.target.value)} />
          <button onClick={overLapAddToList}>추가</button>
          <ul>
            {overlapList.map((string) => {
              return (
                <div key={string}>
                  <li>{string}</li>
                  <input/>
                </div>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
