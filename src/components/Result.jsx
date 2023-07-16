import "./Result.css";
import React from "react";

import Todo from "./Todo";
const Result = (props) => {
  return (
    <div className="result">
      {props.data.length ? (
        props.data.map((todo) => {
          return <Todo title={todo.title} key={todo.key} check={props.check} />;
        })
      ) : (
        <h1>No todo</h1>
      )}
    </div>
  );
};

export default Result;
