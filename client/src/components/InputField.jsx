import React, { useRef } from "react";
import "./inputField.css";

function InputField(props) {
  return (
    <div className="inputField">
      <input
        type={props.type}
        placeholder={props.name}
        onChange={(e) => props.inputFn(e.target.value)}
        pattern={props.pattern}
      />
    </div>
  );
}

export default InputField;
