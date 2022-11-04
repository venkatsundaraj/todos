import React from "react";
const Paragraph = function (props) {
  console.log("paragraph");
  return <p>{props.show ? "Add the item" : ""}</p>;
};

export default React.memo(Paragraph);
