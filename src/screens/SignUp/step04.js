import React, { useEffect, useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker"; 
import styled from "styled-components/native";
import { Text } from "react-native";
import Button from "../../components/SignUp/btn_inputs/button";
import color from "../../components/SignUp/palette";
const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 140px 20px;
`;

const StyledImage=styled.Image`
  width:64px;
  margin-bottom:20px;
`;

const StyledText=styled.Text`
  font-size:24px;
  font-weight:900;
  text-align:center;
  margin-bottom:10px;
`;

const StyledBox=styled.View`
  flex-direction:row;
  width: 90%;
  height: 50px;
  color: ${color.grey_1};
  font-weight: 700;
  background-color: ${color.grey_2};
  border: 0.5px solid ${color.grey_3};
  border-radius: 6px;
  margin-bottom: 100px;
  padding: 15px 15px;
  justify-content:space-between;
`;

const Birthday=styled.Text`
  font-size:14px;
`;

const Age=styled.Text`
  color: ${color.grey_1};
  font-size:14px;
`;

const BirthDayButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 6px;
  background-color: ${color.white};
`;

const BirthDayText = styled.Text`
  color: ${color.blue};
  font-weight: 900;
  margin-top: 20px;
`;

const Step04 = ({navigation,form}) => {
    const now=new Date();
    const [date, setDate] = useState(new Date());
    const [birthday,setBirthday]=useState('');
    const [year,setYear]=useState(0);
    const [month,setMonth]=useState(1);
    const [date2,setDate2]=useState(1);
    const [noAge,setNoAge]=useState(true);
    const [modal,setModal]=useState(false);
    const [disabled,setDisabled]=useState(true);

    const onChange = (event, date) => {
      setBirthday(date);
      setModal(!modal);
      setNoAge(false);
      setDisabled(false);
    };

    useEffect(()=>{
      let birthdayString=JSON.stringify(birthday);
      setYear(birthdayString?.substr(1,4));
      setMonth(birthdayString?.substr(6,2));
      setDate2(birthdayString?.substr(9,2));
    },[birthday]);

    return (
    <Container>
      <StyledImage source={require("../../../assets/images/birthday.png")}/>
      <StyledText>{"생일 추가"}</StyledText>
      <Text style={{marginBottom:20}}>{"공개 프로필에 포함되지 않습니다."}</Text>
      <StyledBox>
        {date2?
          <Birthday>{`${year}년 ${month}월 ${date2}일`}</Birthday>
          : <></>}
        {
          noAge?
            <></>
            : <Age>
                {`${month<now.getMonth()+1||(month==now.getMonth()+1&&date2<=now.getDate())?
                    now.getFullYear()-year
                    :now.getFullYear()-year-1
                   }세`
                }
              </Age>
        }
      </StyledBox>

      <Button selectedTheme={1} text={"다음"} navigation={navigation} nextPage={"Step05"} disabled={disabled}/>

      <BirthDayButton onPress={()=>setModal(!modal)}>
        <BirthDayText>{"생일 입력하기"}</BirthDayText>
      </BirthDayButton>
      {modal?
        <DateTimePicker value={date} mode="date" display="spinner" locale="ko" onChange={onChange} maximumDate={now}/>
        :<></>}
    </Container>
  );
};
export default Step04;
