import React from "react";
import styled from "styled-components/native";
import color from "./palette";
const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 6px;
  background-color: ${({ selectedTheme }) =>
    selectedTheme === 1 ? color.blue : color.white};
`;

const ButtonText = styled.Text`
  color: ${({ selectedTheme }) =>
    selectedTheme === 1 ? color.white : color.blue};
  font-weight: 700;
  font-size: 16px;
`;

const Button = ({ selectedTheme, text }) => {
  return (
    <Container selectedTheme={selectedTheme}>
      <ButtonText selectedTheme={selectedTheme}>{text}</ButtonText>
    </Container>
  );
};

export default Button;
