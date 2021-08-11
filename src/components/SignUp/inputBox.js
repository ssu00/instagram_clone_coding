import React from "react";
import styled from "styled-components/native";

const StyledInput = styled.TextInput`
  width: 100%;
  height: 50px;
  color: #999999;
  font-weight: 700;
  background-color: #fafafa;
  border: 0.5px solid #dbdbdb;
  border-radius: 6px;
  margin-bottom: 20px;
  padding-left: 15px;
`;

const InputBox = ({ placeholder }) => {
  return <StyledInput placeholder={placeholder} />;
};

export default InputBox;
