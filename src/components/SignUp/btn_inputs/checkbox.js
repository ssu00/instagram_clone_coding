import React from "react";
import styled from "styled-components/native";
const Container=styled.View`
    flex-direction:row;
    width:90%;
    height:50px;
    justify-content:space-between;
`;

const StyledImage=styled.Image`
    width:22px;
    height:22px;
`;

const StyledText=styled.Text`
    font-size:18px;
`;

const CheckPress=styled.TouchableOpacity`
    width:30px;
    height:100%;
`;

const CheckBox=({text,able, onPress})=>{
    return (
    <Container>
        <StyledText>{text}</StyledText>
        <CheckPress onPress={onPress}>
        {able?
            <StyledImage source={require("../../../../assets/images/check.png")}/>:
            <StyledImage source={require("../../../../assets/images/circle.png")}/>}
        </CheckPress>
    </Container>
    );
}

export default CheckBox;