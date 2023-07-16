import "./Container.css";
import Input from "./Input";
import React from "react";
import Result from "./Result";

import { useState } from "react";

const fake__data = [
  { title: "item 1", key: "1", complete: false },
  { title: "item 2", key: "2", complete: false },
  { title: "item 3", key: "3", complete: false },
  { title: "item 4", key: "4", complete: false },
  { title: "item 5", key: "5", complete: false },
];

const Container = () => {
  const [data, setData] = useState([]);

  const submitTodo = (input) => {
    const todo = {
      title: input,
      key: Math.random() * 50,
    };

    setData((item) => [todo, ...item]);
  };

  return (
    <div className="container">
      <Input submitTodo={submitTodo} />

      <Result data={data} />
    </div>
  );
};

export default Container;
