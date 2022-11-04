import React from "react";

import classes from "./InputListItems.module.css";

import Card from "../UI/Card";

const InputListItem = function (props) {
  // console.log(props.items);
  const todoItems = props.items.map((item) => (
    <li key={item.id}>{item.text}</li>
  ));
  return <Card>{<ul>{todoItems}</ul>}</Card>;
};

export default InputListItem;
