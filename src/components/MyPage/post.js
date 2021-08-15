import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity,Image} from "react-native";
const PostContainer=styled.Image`
    width:80px;
    height:80px;
`;
const prefix="https://firebasestorage.googleapis.com/v0/b/instagramclone-d85d7.appspot.com/o"
const Post=({source})=>{
    const image=`${prefix}/${imageName}?alt=media`;
    return (
        <TouchableOpacity>
            <PostContainer source={(source)}/>
            {/* <PostContainer source={require("../../../assets/images/test1.jpg")}/> */}
        </TouchableOpacity>
    )
}

export default Post;