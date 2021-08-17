import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity,Image} from "react-native";
const PostContainer=styled.Image`
    width:80px;
    height:80px;
`;
            {/* <PostContainer source={require("../../../assets/images/test1.jpg")}/> */}
    // const image=`${prefix}/${imageName}?alt=media`;
    const prefix="https://firebasestorage.googleapis.com/v0/b/instagramclone-d85d7.appspot.com/o"
const Post=({source})=>{
    return (
        <TouchableOpacity>
            <PostContainer source={{uri:source}}/>
        </TouchableOpacity>
    )
}

export default Post;