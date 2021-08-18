import React from "react";
import styled from "styled-components/native";
import color from "../palette";
const StyledInput = styled.TextInput`
  width: 100%;
  height: 50px;
  color: ${color.grey_1};
  font-weight: 700;
  background-color: ${color.grey_2};
  border: 0.5px solid  ${color.grey_3};
  border-radius: 6px;
  margin-bottom: 20px;
  padding-left: 15px;
`;

const InputBox = ({ placeholder,handleChange,category,encrypted,value }) => {
  return (
    <StyledInput
      placeholder={placeholder}
      onChangeText={handleChange(`${category}`)}
      secureTextEntry={encrypted}
      value={value}
    />);
};

export default InputBox;
