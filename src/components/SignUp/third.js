import React from "react";
import styled from "styled-components/native";
import InputBox from "./inputBox";
import Button from "./button";
import color from "./palette";

const Container=styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  padding: 50px 10px;
  text-align:center;
  `;

const StyledText=styled.Text`
font-weight:900;
font-size:12px;
margin-bottom:10px;
`;

const StyledText2=styled.Text`
font-weight:700;
font-size:10px;
`;

const Blue=styled.TouchableOpacity`
margin-bottom:20px;
`;

const StyledBlue=styled.Text`
font-weight:900;
font-size:10px;
color: ${color.blue};
`;
const Third=()=>{
    return <Container><StyledText>인증코드 입력</StyledText><StyledText2>{`djfksjk@gmail.com\n이메일 주소로 전송된 인증 코드를 입력하세요.`}</StyledText2><Blue><StyledBlue>{"코드 재전송"}</StyledBlue></Blue><InputBox placeholder={"인증 코드"}></InputBox><Button selectedTheme={1} text={"다음"}/></Container>
}

export default Third;