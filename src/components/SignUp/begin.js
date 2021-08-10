import React from "react";
import styled from "styled-components";
import Button from "./button";

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
`;

const StyledImage = styled.Image`
  width: 100%;
  height: 50px;
  margin-bottom: 60px;
`;

const Begin = () => {
  return (
    <Container>
      <StyledImage source={require("./logo.jpg")}></StyledImage>
      <Button selectedTheme={1} text={"새 계정 만들기"} />
      <Button selectedTheme={2} text={"로그인"} />
    </Container>
  );
};

export default Begin;