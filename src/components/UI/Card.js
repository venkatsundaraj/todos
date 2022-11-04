import React from "react";

import classes from "./Card.module.css";

const Card = function (props) {
  const classess = `${classes.card} ${props.classes}`;

  return <div className={classess}>{props.children}</div>;
};

export default Card;
