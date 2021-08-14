import React from "react";
import styled from "styled-components/native";
import InputBox from "../btn_inputs/inputBox";
import Button from "../btn_inputs/button";
// import color from "./palette";

const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  padding: 50px 10px;
  text-align: center;
`;

const StyledText = styled.Text`
  font-weight: 900;
  font-size: 16px;
  margin-bottom: 15px;
  text-align:center;
`;

const StyledText2 = styled.Text`
  font-weight: 700;
  font-size: 14px;
  text-align:center;
`;

const Blue = styled.TouchableOpacity`
  margin-bottom: 20px;
`;

const StyledBlue = styled.Text`
  font-weight: 900;
  font-size: 10px;
  color: #0195f7;
  font-size: 14px;
`;
const Third = ({ navigation,handleChange,form }) => {
  return (
    <Container>
      <StyledText>인증코드 입력</StyledText>
      <StyledText2>{`${form.email}\n이메일 주소로 전송된 인증 코드를 입력하세요.`}</StyledText2>
      <Blue>
        <StyledBlue>{"코드 재전송"}</StyledBlue>
      </Blue>
      <InputBox placeholder={"인증 코드"} handleChange={handleChange} category={"authorization"} encrypted={false} value={""}/>
      <Button
        selectedTheme={1}
        text={"다음"}
        navigation={navigation}
        nextPage={"Fourth"}
        disabled={false}/>
    </Container>
  );
};

export default Third;
