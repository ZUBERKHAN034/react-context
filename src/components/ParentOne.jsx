import React, { useContext } from "react";
import context from "./Context";
import Child from "./Child";
function ParentOne() {
  const theme = useContext(context);
  console.log("ParentOne called");
  return (
    <div className={theme ? "dark" : "light"}>
      ParentOne
      <Child />
    </div>
  );
}

export default ParentOne;
