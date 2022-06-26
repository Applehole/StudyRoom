import React from "react";
import "./styled/FancyBorder.css"

function FancyBorder(props) {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
      </div>
    );
  }

export default FancyBorder;