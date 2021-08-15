import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
const TabContainer=styled.View`
    flex-direction:row;
    width:100%;
    justify-content: space-between;
    align-items:center;
    margin-bottom:10px;
`;

const Name=styled.Text`
    font-size:20px;
    font-weight:900;
    text-align:left;
`;

const Private=styled.Image`
    width:16px;
    height:16px;
    margin-right:5px;
`;

const Plus=styled.Image`
    width:16px;
    height:16px;
    margin-right:15px;
`;

const Menu=styled.Image`
    width:16px;
    height:16px;
`;

const Box=styled.View`
    flex-direction:row;
    width:20%;
    justify-content:flex-end;
`;

const TopTab=({secret,username})=>{
    return (
        <TabContainer>
            <>
                <TouchableOpacity>
                    <Private source={secret?require("../../../assets/images/lock.png"):require("../../../assets/images/unlock.png")}/>
                </TouchableOpacity>
                <Name>{username}</Name>
            </>
            <Box>
                <TouchableOpacity>
                    <Plus source={require("../../../assets/images/plus.png")}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Menu source={require("../../../assets/images/menu.png")}/>
                </TouchableOpacity>
            </Box>
        </TabContainer>);
}

export default TopTab;