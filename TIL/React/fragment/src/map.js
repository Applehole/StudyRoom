import React from "react";
import { useState } from "react";

function map() {
    const [data, setData] = useState(["hi", "namaste", "gonizziwa", "bonjour", "hola", "apa kabar", "xin chao"])
    return (
        <>
            {data.map((el, idx) => {
                return (
                    <React.Fragment key={idx}>
                        <div>{idx}</div>
                        <div>{el}</div>
                    </React.Fragment>
                )
            })}
        </>
    );
}

export default map;
