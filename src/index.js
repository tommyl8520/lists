//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import ReactDOM from "react-dom";

//var React = require("react");
//var ReactDOM = require("react-dom");
function NameList(props) {
  const myLists = props.myLists;
  const listItems = myLists.map((myList) => <li>{myList}</li>);
  return (
    <div>
      <h2>favorite foods </h2>
      <ul>{listItems}</ul>
    </div>
  );
}
const myLists = ["Pizza", "Sushi", "corn", "Beef", "Yogurt"];
ReactDOM.render(
  <NameList myLists={myLists} />,
  document.getElementById("root")
);
export default "root";
