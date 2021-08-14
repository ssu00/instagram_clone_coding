import React from "react";
import styled from "styled-components/native";
import Button from "../btn_inputs/button";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
`;

const StyledImage = styled.Image`
  width: 100%;
  height: 50px;
  margin-bottom: 60px;
`;

const Begin = ({ navigation }) => {
  return (
    <Container>
      <StyledImage source={require("../../../../assets/images/logo.jpg")}></StyledImage>
      <Button
        selectedTheme={1}
        text={"새 계정 만들기"}
        navigation={navigation}
        nextPage={"Second"}
        disabled={false}
      />
      <Button selectedTheme={2} text={"로그인"} />
    </Container>
  );
};

export default Begin;
