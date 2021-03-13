import React from "react";
import styled from "styled-components";

import Sidebar from "./components/Sidebar";
import AppContent from "./components/AppContent";
import Cookie from "./components/Cookie";

import useCookies from "./hooks";

const App = () => {
  const { addOne } = useCookies();

  return (
    <StyledApp>
      <Sidebar />
      <AppContent>
        <Cookie onClick={addOne} />
      </AppContent>
    </StyledApp>
  );
};

const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
  border: 1px solid green;
  background-color: violet;
  position: relative;
`;

export default App;
