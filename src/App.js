// import logo from './logo.svg';
import React, { Fragment, useState, useCallback } from "react";

import "./App.css";

import Input from "./components/Input/Input";

import InputListItem from "./components/InputListItems/InputListItems";

import Paragraph from "./components/UI/Paragraph";

import Button from "./components/UI/Button";

function App() {
  const [textItems, setTextItems] = useState([
    { text: "good enough", id: "m1" },
    { text: "last funeral", id: "m2" },
  ]);

  const [showParagraph, setShowParagraph] = useState(false);
  const [toggeleState, setToggeleState] = useState(false);

  const inputTextHandler = function (text) {
    setTextItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems.unshift({ text: text, id: Math.random().toString() });
      return updatedItems;
    });
  };
  // console.log(items);

  const paragraphHandler = useCallback(
    function () {
      if (toggeleState) {
        setShowParagraph((prevState) => !prevState);
      }
    },
    [toggeleState]
  );

  console.log("app");

  const toggleHandler = function () {
    setToggeleState(true);
  };

  return (
    <Fragment>
      <Input onAddText={inputTextHandler} />
      <InputListItem items={textItems}></InputListItem>
      {<Paragraph show={showParagraph}></Paragraph>}
      <Button onClick={toggleHandler}>Allow Toggle</Button>
      <Button onClick={paragraphHandler}>Add to</Button>
    </Fragment>
  );
}

export default App;
