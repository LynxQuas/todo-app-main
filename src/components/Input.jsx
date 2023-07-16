import { useState } from "react";
import React from "react";

import "./Input.css";

const Input = (props) => {
  const [input, setInput] = useState("");

  const inputChange = (e) => {
    setInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    input && props.submitTodo(input);

    setInput("");
  };

  return (
    <form className="input__container" onSubmit={submitHandler}>
      <div onClick={submitHandler}></div>
      <input
        type="text"
        value={input}
        className="input"
        onChange={inputChange}
        placeholder="create a new todo"
      />
    </form>
  );
};
export default Input;
