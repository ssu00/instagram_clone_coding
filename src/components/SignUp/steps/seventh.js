import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import color from "../palette";
import Button from "../btn_inputs/button";
import { Alert } from "react-native";
import { signup } from "../../../utils/firebase";
const Container = styled.View`
  flex: 1;
  justify-content:center;
  align-items: center;
  padding: 50px 10px;
`;

const StyledText=styled.Text`
  font-size:24px;
  margin-bottom:20px;
  text-align:center;
`;

const Definition=styled.Text`
  font-size:14px;
  color:${color.grey_0};
  margin-bottom:30px;
  text-align:center;
`;

const ButtonContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 6px;
  background-color: ${({ selectedTheme }) =>
    selectedTheme === 1 ? '#0195f7' : '#ffffff'};
`;

const ButtonText = styled.Text`
  color: ${({ selectedTheme }) =>
    selectedTheme === 1 ? '#ffffff': '#0195f7'};
  font-weight: 700;
  font-size: 16px;
`;

const SubmitButton = ({ selectedTheme, text, navigation, nextPage,onPress }) => {
  return (
    <ButtonContainer
      selectedTheme={selectedTheme}
      onPress={onPress}
    >
      <ButtonText selectedTheme={selectedTheme}>{text}</ButtonText>
    </ButtonContainer>
  );
};

const Seventh=({ navigation,form })=>{
  const [success,setSuccess]=useState(false);
  const _handleSignupButtonPress = async () => {
    let email=form.email;
    let password=form.password;
    try {
      const user = await signup({ email, password });
      dispatch(user);
      setSuccess(true);
      Alert.alert('Signup Success');
    } catch (e) {
      setSuccess(false);
      Alert.alert('Signup Error', e.message);
    } 
    };

    if(success===true){
      navigation.push('Final');
    }

    return <Container>
        <StyledText>{`${form.name}님으로\n가입하시겠어요?`}</StyledText>
        <Definition>{"나중에 언제든지 사용자 이름을 변경할 수 있습니다."}</Definition>
        <SubmitButton selectedTheme={1} text={"가입하기"} navigation={navigation} nextPage={"Final"} onPress={()=> _handleSignupButtonPress()}></SubmitButton>
        <Button selectedTheme={2} text={"사용자 이름 변경"} navigation={navigation} nextPage={"Fourth"} disabled={false}></Button>
    </Container>
}

export default Seventh;