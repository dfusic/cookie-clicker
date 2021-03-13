import React from "react";
import styled from "styled-components";

const Cookie = (props) => {
  const { onClick } = props;
  return <StyledCookie onClick={onClick} />;
};

const StyledCookie = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
`;

export default Cookie;
