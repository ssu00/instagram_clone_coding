import React from "react";
import styled from "styled-components/native";
import Profile from "./Profile";
import BottomTab from "./BottomTab";
import TopTab from "./TopTab";
import Post from "./post";
import EditButton from "./Editbutton";
import data from "./myPageData.json"

const Container=styled.View`
    flex:1;
    padding:10px 10px 50px 10px;
`;

const MyPage=()=>{
    return (
        <>
            <Container>
                <TopTab secret={true} username={"user!"}/>
                <Profile/>
                <EditButton/>
                <Post source={data.user.posts[0].img}/>
            </Container>
            <BottomTab/>
        </>
    );
}

export default MyPage;