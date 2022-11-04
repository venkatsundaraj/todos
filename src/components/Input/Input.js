import React, { Fragment, useState } from "react";

import classes from "./Input.module.css";

const Input = function (props) {
  const [inputValue, setInputValue] = useState("");

  const inputValueHandler = function (e) {
    setInputValue(e.target.value);
  };

  const submitHandler = function (e) {
    e.preventDefault();
    props.onAddText(inputValue);
    setInputValue("");
  };

  return (
    <Fragment>
      <form onSubmit={submitHandler}>
        <input
          value={inputValue}
          onChange={inputValueHandler}
          type="text"
          id="input"
        ></input>
        <button type="submit" htmlFor="input">
          Add to
        </button>
      </form>
    </Fragment>
  );
};

export default Input;
