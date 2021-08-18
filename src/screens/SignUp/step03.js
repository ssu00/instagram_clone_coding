import React,{useState,useEffect} from "react";
import styled from "styled-components/native";
import InputBox from "../../components/SignUp/btn_inputs/inputBox";
import Button from "../../components/SignUp/btn_inputs/button";
import color from "../../components/SignUp/palette";
const Container = styled.View`
  flex: 1;
  padding: 60px 30px;
`;

const Heading = styled.Text`
  font-size: 16px;
  font-weight: 900;
  text-align: center;
  margin-bottom: 30px;
`;

const Error=styled.Text`
  font-size:13px;
  color:${color.red};
  text-align:center;
  margin-bottom:15px;
`;

const Step03 = ({ navigation,handleChange,form }) => {
  const [disabled, setDisabled]=useState(true);
  const [error,setError]=useState('');
  useEffect(()=>{
    if(form.name!='' && form.name.length<3){
      setError("이름은 세 글자 이상 입력해주세요.");
    } else if (form.password!='' && form.password.length<6){
      setError("비밀번호는 여섯 글자 이상 입력해주세요.");
    } else {
      setError("");
    }
  },[form.name,form.password]);

  useEffect(()=>{
    setDisabled(!(form.name&&form.password&&!error));
  },[form.name,form.password,error]);

  return (
    <Container>
      <Heading>{"이름 및 비밀번호"}</Heading>
      <InputBox placeholder={"성명"} handleChange={handleChange} category="name" encrypted={false} value={form.name}/>
      <InputBox placeholder={"비밀번호"} handleChange={handleChange} category="password" encrypted={true} value={form.password}/>
      {error?
        <Error>{error}</Error>:<></>}
      <Button selectedTheme={1} text={"계속 진행하여 연락처 동기화하기"} navigation={navigation} nextPage={"Step04"} disabled={disabled}/>
      <Button selectedTheme={2} text={"연락처를 동기화하지 않고 계속하기"} disabled={disabled}/>
    </Container>
  );
};

export default Step03;
