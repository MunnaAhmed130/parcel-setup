import React, { useState } from "react";
import swcLogo from "../images/swc-logo.jpg";

const App = () => {
  // console.log("hello");
  const [state, setState] = useState(false);
  console.log(state);
  return (
    <div onClick={() => setState(!state)}>
      <h2>State is - {state.toString()}</h2>
      <img src={swcLogo} alt="" />
    </div>
  );
};

export default App;
