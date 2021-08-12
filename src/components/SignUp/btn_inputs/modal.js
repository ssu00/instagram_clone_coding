import React from "react";
import styled from "styled-components";
// import color from "./palette";
const ModalContainer = styled.View`
  width: 80%;
  height: 100px;
  background-color: #ffffff;
`;
//background-color: ${color.white};

const StyledText = styled.Text`
  font-size: 18px;
  font-weight: 900;
`;

const CheckButton = styled.TouchableOpacity`
  background-color: #ffffff;
  height: 20px;
`;
//background-color: ${color.white};

const StyledText2 = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: #0195f7;
`;
//  color: ${color.blue};

const Modal = () => {
  return (
    <ModalContainer>
      <StyledText>{"이메일이\n전송되었습니다."}</StyledText>
      <CheckButton>
        <StyledText2>{"확인"}</StyledText2>
      </CheckButton>
    </ModalContainer>
  );
};

export default Modal;
