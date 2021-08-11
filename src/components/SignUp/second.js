import React,{useEffect, useState} from "react";
import styled from "styled-components/native";
import InputBox from "./inputBox";
import Button from "./button";
import RadioButton from "./RadioButton";

const Container = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 160px 30px 10px 30px;
`;

const RadioContainer = styled.View`
width:100%;
flex-direction: row;
  margin-bottom: 30px;
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
  text-align:center;
`;

const Blue = styled.Text`
  font-size: 13px;
  color: #0195f7;
  font-weight: 700;
`;

const Second = () => {
  const [select, setSelect]=useState(true);
  return (
    <Container>
      <StyledImage source={require("./user.jpg")}></StyledImage>
      <RadioContainer>
        <RadioButton value="전화번호" selected={select} onPress={()=>setSelect(true)}>
          전화번호
        </RadioButton>
        <RadioButton value="이메일" selected={!select} onPress={()=>setSelect(false)}>
          이메일
        </RadioButton>
      </RadioContainer>
      {select?<>      <InputBox placeholder={"휴대폰"}></InputBox>
      <StyledText>
        {`Instagram의 업데이트 내용을 SMS로 수신할 수 있으며, \n언제든지 수신을 취소할 수 있습니다.`}
      </StyledText>
</>:     <InputBox placeholder={"이메일"}></InputBox>}
      <Button selectedTheme={1} text={"다음"}></Button>
      <Footer>
        {"이미 계정이 있으신가요?"} <Blue>{"로그인하기"}</Blue>
      </Footer>
    </Container>
  );
};

export default Second;
