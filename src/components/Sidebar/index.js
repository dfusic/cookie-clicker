import React from "react";
import styled from "styled-components";

const Sidebar = () => {
  return <StyledSidebar />;
};

const StyledSidebar = styled.aside`
  position: fixed;
  width: 30%;
  height: 100vh;
  border: 1px solid red;
  background-color: blue;
  top: 0;
  right: 0;
`;

export default Sidebar;
