import React from "react";
import styled from "styled-components/native";
const TopContainer=styled.View`
    flex-direction:row;
    width:100%;
    padding:10px 20px;
    justify-content:space-between;
`;

const StyledImage=styled.Image`
    width:16px;
    height:16px;
`;

const ImageSection=styled.View`
    width:20%;
    height:100%;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
`;

const Friend=styled.View`
    flex-direction:row;
`;

const FriendInfo=styled.View`
   justify-content:space-around;
`;

const FriendName=styled.Text`
    font-size:16px;
    font-weight:700;
`;

const FriendNick=styled.Text`
    font-size:12px;
    font-weight:400;
`;

const FrinedProfile=styled.Image`
    border-radius:50;
    width:16px;
    height:16px;
    margin-right:10px;
`;

const TopTab=()=>{
    return(
        <TopContainer>
            <Friend>
                <FrinedProfile></FrinedProfile>
                <FriendInfo>
                    <FriendName>{"김지수"}</FriendName>
                    <FriendNick>{"ssu00"}</FriendNick>
                </FriendInfo>
            </Friend>

            <ImageSection>
                <StyledImage source={require("../../../assets/images/call.png")}/>
                <StyledImage source={require("../../../assets/images/camera.png")}/>
            </ImageSection>
        </TopContainer>
    )
}

export default TopTab;