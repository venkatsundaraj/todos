import React from "react";

const Button = function (props) {
  console.log("button");
  return <button onClick={props.onClick}>{props.children}</button>;
};

export default React.memo(Button);
