import React, { useState } from "react";
import swcLogo from "../images/swc-logo.jpg";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const App = () => {
  // console.log("hello");
  const [state, setState] = useState(false);
  console.log(state);
  return (
    <Container onClick={() => setState(!state)}>
      <h2>State is - {state.toString()}</h2>
      <img src={swcLogo} alt="" />
    </Container>
  );
};

export default App;
