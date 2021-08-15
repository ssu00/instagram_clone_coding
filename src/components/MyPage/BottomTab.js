import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
const BottomContainer=styled.View`
    width:100%;
    flex-direction:row;
    justify-content:space-around;
    margin-bottom:20px;
`;

const Images=styled.Image`
    width:24px;
    height:24px;
`;

const BottomTab=()=>{
    return(
        <BottomContainer>
            <TouchableOpacity>
                <Images source={require("../../../assets/images/home.png")}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Images source={require("../../../assets/images/search.png")}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Images source={require("../../../assets/images/video.png")}/>
            </TouchableOpacity>

            <TouchableOpacity>
            <Images source={require("../../../assets/images/shopping-bag.png")}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Images source={require("../../../assets/images/userSmall.png")}/>
            </TouchableOpacity>
        </BottomContainer>
    )
}

export default BottomTab;