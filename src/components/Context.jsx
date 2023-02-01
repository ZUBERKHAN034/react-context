import React from "react";
// Context in React is an advanced feature that allows components to share data with
// other components without having to pass the data down through every level of the component tree.
// It works similarly to a global store object in a JavaScript library like Redux.
const context = React.createContext("Hello world");
export default context;