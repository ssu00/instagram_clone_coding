import React from "react";
import styled from "styled-components/native";
const ProfileContainer=styled.View`
    width:100%;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    margin-bottom:10px;
`;

const ProfileImage=styled.Image`
    width:64px;
    height:64px;
`;

const ProfileNum=styled.Text`
    font-size:20px;
    font-weight:900;
`;

const ProfileText=styled.Text`
    font-size:16px;
    font-weight:700;
`;

const StyledView=styled.View`
    align-items:center;
`;

const Profile=()=>{
    return (
    <ProfileContainer>
        <ProfileImage source={require("../../../assets/images/userBBig.png")}/>
        <StyledView>
            <ProfileNum>{10}</ProfileNum>
            <ProfileText>{"게시물"}</ProfileText>
        </StyledView>
        <StyledView>
            <ProfileNum>{24}</ProfileNum>
            <ProfileText>{"팔로워"}</ProfileText>
        </StyledView>
        <StyledView>
            <ProfileNum>{28}</ProfileNum>
            <ProfileText>{"팔로잉"}</ProfileText>
        </StyledView>
    </ProfileContainer>
    );
}

export default Profile;