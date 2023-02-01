import React, { useContext } from "react";
import context from "./Context";
function ParentTwo() {
  const theme = useContext(context);
  console.log("ParentTwo called");
  return <div className={theme ? "dark" : "light"}>ParentTwo</div>;
}

export default ParentTwo;
