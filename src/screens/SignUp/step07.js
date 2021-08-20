import React, { useState } from "react";
import styled from "styled-components/native";
const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 50px 10px;
`;

const StyledText=styled.Text`
  font-size:80px;
  margin-bottom:20px;
`;

const Step07=({ navigation,handleChange,form })=>{
    return <Container>
        <StyledText>{"메인 페이지"}</StyledText>
    </Container>
}

export default Step07;