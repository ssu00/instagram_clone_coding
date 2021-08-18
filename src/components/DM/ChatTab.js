import React from "react";
import styled from "styled-components/native";
import { TextInput } from "react-native-gesture-handler";
const ChatContainer=styled.View`
    width:100%;
    padding:10px 100px 10px 30px;
    position:relative;
    border-radius:20px;
    border:1px #5a5a5a;
`;

const Photo=styled.TouchableOpacity`
    width:16px;
    height:16px;
    position:absolute;
    left:5px;
`;

const ChatTab=()=>{
    return (
        <ChatContainer>
            <TextInput placeholder={"메시지 보내기..."}></TextInput>
            <Photo></Photo>
        </ChatContainer>
    )
}

export default ChatTab;