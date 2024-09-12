import React from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
  ${({ height }) => height && `height: ${height}px`};
  width: calc(100% - 32px);
  padding: 16px;
  line-height: 20px;
`;

const TextInput = ({ height }) => {
  return <StyledTextarea height={height}></StyledTextarea>;
};

export default TextInput;
