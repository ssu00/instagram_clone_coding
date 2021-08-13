import React from "react";
import styled from "styled-components/native";
// import color from "./palette";
const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 6px;
  background-color: ${({ selectedTheme }) =>
    selectedTheme === 1 ? '#0195f7' : '#ffffff'};
    opacity:${({disabled})=>disabled?0.5:1};
`;

const ButtonText = styled.Text`
  color: ${({ selectedTheme }) =>
    selectedTheme === 1 ? '#ffffff': '#0195f7'};
  font-weight: 700;
  font-size: 16px;
`;

const Button = ({ selectedTheme, text, navigation, nextPage,disabled }) => {
  return (
    <Container
      selectedTheme={selectedTheme}
      onPress={() => navigation.navigate(`${nextPage}`)}
      disabled={disabled}
    >
      <ButtonText selectedTheme={selectedTheme}>{text}</ButtonText>
    </Container>
  );
};

export default Button;