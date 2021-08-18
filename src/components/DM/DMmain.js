import React from "react";
import styled from "styled-components/native";
import TopTab from "./TopTab";
import ChatTab from "./ChatTab";
import ChatRecord from "./ChatRecord";
const StyledContainer=styled.View`
    flex:1;
    padding:10px 20px 20px 20px;
    border:1px #000000;
`;

const DMmain=()=>{
    return (
        <StyledContainer>
            <TopTab/>
            <ChatRecord/>
            <ChatTab/>
        </StyledContainer>
    )
}

export default DMmain;