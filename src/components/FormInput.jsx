import React from "react";
import { useState } from "react";
import "./FormInput.css";
const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { lable, errorMsg, onChange, id, ...inputProps } = props;
  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className="formInput">
      {/* <label ></label> */}
      {/* <input name={props.name}  type="text" placeholder={props.placeholder}/> */}
      <label sty>{lable}</label>
      <br />
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <br />
      <span>*{errorMsg}</span>
    </div>
  );
};

export default FormInput;
