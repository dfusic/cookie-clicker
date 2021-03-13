import React from "react";
import styled from "styled-components";

const AppContent = ({ children }) => {
  return <StyledAppContent>{children}</StyledAppContent>;
};

const StyledAppContent = styled.div`
  width: 70vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default AppContent;
