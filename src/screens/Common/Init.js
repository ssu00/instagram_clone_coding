import React from "react";
import styled from "styled-components/native";
import Button from "../../components/SignUp/btn_inputs/button";

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

const InitScreen = ({ navigation }) => {
  return (
    <Container>
      <StyledImage source={require("../../../assets/images/logo.jpg")}/>
      <Button
        selectedTheme={1}
        text={"새 계정 만들기"}
        navigation={navigation}
        nextPage={"Register"}
        disabled={false}
      />
      <Button selectedTheme={2} text={"로그인"} navigation={navigation} nextPage={"SignIn"}/>
    </Container>
  );
};

export default InitScreen;
