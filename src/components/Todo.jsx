import "./Todo.css";
import { useState } from "react";
import React from "react";

const Todo = (props) => {
  const [complete, setComplete] = useState(false);

  const markComplete = () => {
    setComplete(true);
  };

  return (
    <div className="todo">
      <div className="icon">
        {complete ? (
          <div className="icon__clicked">
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
              <path
                fill="none"
                stroke="#FFF"
                strokeWidth="2"
                d="M1 4.304L3.696 7l6-6"
              />
            </svg>
          </div>
        ) : (
          <div className="icon__empty" onClick={markComplete}></div>
        )}
      </div>
      <p className={complete ? "complete" : null} onClick={markComplete}>
        {props.title}
      </p>
    </div>
  );
};

export default Todo;
