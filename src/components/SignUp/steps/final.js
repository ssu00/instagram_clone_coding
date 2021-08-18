import React, { useState } from "react";
import styled from "styled-components/native";
import { CheckBox } from "react-native";
import color from "../palette";
import Button from "../btn_inputs/button";
const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 50px 10px;
`;

const StyledText=styled.Text`
  font-size:80px;
  margin-bottom:20px;
`;

const Final=({ navigation,handleChange,form })=>{
    return <Container>
        <StyledText>{"메인 페이지"}</StyledText>
    </Container>
}

export default Final;