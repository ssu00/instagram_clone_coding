import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import InputBox from "../btn_inputs/inputBox";
import Button from "../btn_inputs/button";
import RadioButton from "../btn_inputs/RadioButton";
import { validatePhone,validateEmail,removeWhitespace } from "../../../utils/common";
const Container = styled.View`
  flex-direction: column;
  align-items: center;
  padding: 120px 30px 10px 30px;
`;

const RadioContainer = styled.View`
  width: 100%;
  flex-direction: row;
  margin-bottom: 15px;
`;

const StyledImage = styled.Image`
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
`;

const StyledText = styled.Text`
  font-size: 12px;
  color: #999999;
  text-align: center;
  margin-bottom: 15px;
`;

const Footer = styled.Text`
  background-color: #ffffff;
  width: 100%;
  font-size: 12px;
  color: #999999;
  text-align: center;
`;

const Blue = styled.Text`
  font-size: 13px;
  color: #0195f7;
  font-weight: 700;
`;

const Error=styled.Text`
  font-size:13px;
  color:#f44336;
  text-align:center;
  margin-bottom:15px;
`;

const Second = ({ navigation,handleChange,form }) => {
  const [select, setSelect] = useState(true);
  const [disabled, setDisabled]=useState(true);
  const [emailError,setEmailError]=useState("");
  const [phoneError,setPhoneError]=useState("");

  useEffect(() => {
      if (form.email!=''&&!validateEmail(form.email)) {
        setEmailError('이메일 형식을 확인하세요.');
      } else{
        setEmailError('');
      }
      if (form.phone!=''&&!validatePhone(form.phone)) {
        setPhoneError('휴대폰 번호는 숫자로만 이루어져야 합니다.');
      } else if (form.phone.length > 0 && form.phone.length < 10){
        setPhoneError('휴대폰 번호는 10글자 이상이어야 합니다.');
      } else {
        setPhoneError('');
      }
  }, [form.email, form.phone]);

  useEffect(() => {
    setDisabled(!(form.email&&!emailError)&&!(form.phone&&!phoneError));
  }, [form.email, form.phone, emailError,phoneError]);

  return (
    <Container>
      <StyledImage source={require("../../../../assets/images/user.jpg")}></StyledImage>
       <RadioContainer>
        <RadioButton text="전화번호" selected={select} onPress={()=> setSelect(true)}>
          전화번호
        </RadioButton>
        <RadioButton text="이메일" selected={!select} onPress={()=> setSelect(false)}>
          이메일
        </RadioButton>
      </RadioContainer>
      {select ? (
        <>
          <InputBox placeholder={"휴대폰"} handleChange={handleChange} category={"phone"} encrypted={false} value={form.phone}/>
          {phoneError?<Error>{phoneError}</Error>:<></>}
          <StyledText>
            {`Instagram의 업데이트 내용을 SMS로 수신할 수 있으며, \n언제든지 수신을 취소할 수 있습니다.`}
          </StyledText>
        </>
      ) : (
        <>
        <InputBox placeholder={"이메일"} handleChange={handleChange} category={"email"} encrypted={false} value={form.email}/>
        {emailError?<Error>{emailError}</Error>:<></>}
        </>
        )}
      <Button selectedTheme={1} text={"다음"} navigation={navigation} nextPage={"Third"} disabled={disabled}/>
      <Footer>
        {"이미 계정이 있으신가요?"} <Blue>{"로그인하기"}</Blue>
      </Footer>
    </Container>
  );
};

export default Second;
