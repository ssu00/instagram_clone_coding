import React from "react";
import styled from "styled-components";
import InputBox from "./inputBox";
import Button from "./button";

const Container = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 160px 30px 10px 30px;
`;

const StyledImage = styled.Image`
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
`;

const StyledText = styled.Text`
  font-size: 12px;
  color: #999999;
  text-align: center;
  margin-bottom: 10px;
`;

const Footer = styled.Text`
  background-color: #ffffff;
  width: 100%;
  height: 50px;
  font-size: 12px;
  color: #999999;
`;

const Blue = styled.Text`
  font-size: 13px;
  color: #0195f7;
  font-weight: 700;
`;

const Second = () => {
  return (
    <Container>
      <StyledImage source={require("./user.jpg")}></StyledImage>
      <InputBox placeholder={"휴대폰"}></InputBox>
      <StyledText>
        {`Instagram의 업데이트 내용을 SMS로 수신할 수 있으며, \n언제든지 수신을 취소할 수 있습니다.`}
      </StyledText>
      <Button selectedTheme={1} text={"다음"}></Button>
      <Footer>
        {"이미 계정이 있으신가요?"} <Blue>{"로그인하기"}</Blue>
      </Footer>
    </Container>
  );
};

export default Second;
