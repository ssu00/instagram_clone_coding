import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import color from "../../components/SignUp/palette";
import Button from "../../components/SignUp/btn_inputs/button";
import CheckBox from "../../components/SignUp/btn_inputs/checkbox";
const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 50px 10px;
`;

const StyledText=styled.Text`
  font-size:20px;
  margin-bottom:20px;
`;

const Definition=styled.Text`
  font-size:14px;
  color:${color.grey_0};
  margin-bottom:30px;
  text-align:center;
`;

const Step05=({ navigation })=>{
    const [disabled, setDisabled]=useState(true);
    const [able1, setAble1]=useState(false);
    const [able2, setAble2]=useState(false);
    const [able3, setAble3]=useState(false);
    const [ableAll, setAbleAll]=useState(false);
    useEffect(() => {
      if(able1&&able2&&able3){
        setAbleAll(true);
      }
      if(!able1||!able2||!able3){
        setAbleAll(false);        
      }
      setDisabled(!(able1&&able2&&able3&&ableAll));
    }, [able1,able2,able3,ableAll]);

    const ControlAll=()=>{
      if(!ableAll){
        setAbleAll(true)
        setAble1(true);
        setAble2(true);
        setAble3(true);
      }
      else{
        setAbleAll(false);
        setAble1(false);
        setAble2(false);
        setAble3(false);
      }
    }

    return <Container>
        <StyledText>{"약관 동의"}</StyledText>
        <Definition>{"Instagram은 회원님의 개인 정보를 안전하게 보호합니다. 새 계정을 만들려면 모든 약관에 동의하세요."}</Definition>
        <CheckBox text={"모두 동의"} able={ableAll} onPress={()=>ControlAll()}/>
        <CheckBox text={"서비스 약관(필수)"} able={able1} onPress={()=>setAble1(!able1)}/>
        <CheckBox text={"데이터 정책(필수)"} able={able2} onPress={()=>setAble2(!able2)}/>
        <CheckBox text={"위치 기반 기능(필수)"} able={able3} onPress={()=>setAble3(!able3)}/>
        <Button selectedTheme={1} text={"다음"} navigation={navigation} nextPage={"Step06"} disabled={disabled}></Button>
    </Container>
}

export default Step05;