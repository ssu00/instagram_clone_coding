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

// const nodemailer = require("nodemailer");
// const email={
//   "host": "smtp.mailtrap.io",
//   "port": 587,
//   "secure": false, // true for 465, false for other ports
//   "auth": {
//     "user": 'f6dc71cde9539c', // generated ethereal user
//     "pass": '89d9c237a2abcd', // generated ethereal password
//   }
// }
// const send=async(data)=>{
//   nodemailer.createTransport(email).sendMail(data,function(error,info){
//     if(error){
//       console.log(error);
//     } else{
//       console.log(info);
//       return info.response;
//     }
//   });
// };

// const content={
//   from: 'jisu1754@gmail.com', // sender address
//   to: "c2844a25ba-e5525c@inbox.mailtrap.io", // list of receivers
//   subject: "인증번호 랜덤 생성 테스트", // Subject line
//   text: `인증번호는 ${Math.floor(Math.random()*1000000)}입니다.`, // plain text body
// }

const Button = ({ selectedTheme, text, navigation, nextPage,disabled }) => {
  return (
    <Container
      selectedTheme={selectedTheme}
      onPress={
        () => {
          navigation.navigate(`${nextPage}`);
        }}
      disabled={disabled}
    >
      <ButtonText selectedTheme={selectedTheme}>{text}</ButtonText>
    </Container>
  );
};

export default Button;
