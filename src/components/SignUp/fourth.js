import React from "react";
import styled from "styled-components/native";
import InputBox from "./inputBox";
import Button from "./button";

const Container=styled.View`
flex:1;
padding:60px 30px;
`;

const StyledCheck=styled.TouchableOpacity`
margin-bottom:10px;
`;

const Heading=styled.Text`
font-size:18px;
font-weight:900;
text-align:center;
margin-bottom:30px;
`;

const Fourth=()=>{
    return <Container>
    <Heading>{"이름 및 비밀번호"}</Heading>
    <InputBox placeholder={"성명"}/>
    <InputBox placeholder={"비밀번호"}/>
    <StyledCheck>{"비밀번호 저장"}</StyledCheck>
    <Button selectedTheme={1} text={"계속 진행하여 연락처 동기화하기"}/>
    <Button selectedTheme={2} text={"연락처를 동기화하지 않고 계속하기"}/>
    </Container>;
}

export default Fourth;