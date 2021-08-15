import React from "react";
import styled from "styled-components/native";
const StyledBtn=styled.TouchableOpacity`
    width:100%;
    height:30px;
    border:1px #999999;
    border-radius:5px;
    background-color:#ffffff;
    justify-content:center;
`;

const StyledText=styled.Text`
    font-size:12px;
    font-weight:400;
    color:#5a5a5a;
    text-align:center;
`;

const EditButton=()=>{
    return (
        <StyledBtn>
            <StyledText>{"프로필 편집"}</StyledText>
        </StyledBtn>
    );
}

export default EditButton;