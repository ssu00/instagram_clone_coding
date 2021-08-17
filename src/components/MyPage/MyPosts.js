import styled from "styled-components/native";
import Profile from "./Profile";
import BottomTab from "./BottomTab";
import TopTab from "./TopTab";

const Container=styled.View`
    flex:1;
    padding:10px 10px 10px 50px;
`;

const MyPosts=()=>{
    return (
        <>
            <Container>
                <TopTab private={true} username={"user!"}/>
                <Profile/>
            </Container>
            <BottomTab/>
        </>
    );
}

export default MyPosts;