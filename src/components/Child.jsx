import React from "react";

function Child() {
  console.log("Child called");
  return <div>Child</div>;
}

// React.memo helps to optimize the performance of React functional
// components by memoizing the component and skipping rendering when the props are the same.
export default React.memo(Child);
