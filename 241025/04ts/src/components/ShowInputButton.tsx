import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  position: absolute;
  z-index: 1;
  right: 40px;
  bottom: 40px;
`;

interface Props {
  show: boolean;
  onClick: () => void;
}

const ShowInputButton = ({ show, onClick }: Props) => {
  return (
    <Container>
      <Button
        label={show ? "닫기" : "할 일 추가"}
        color={show ? "crimson" : "#304ffe"}
        onClick={onClick}
      />
    </Container>
  );
};

export default ShowInputButton;
