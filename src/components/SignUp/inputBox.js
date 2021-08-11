import React, { useContext } from "react";
import styled from "styled-components/native";
import UserContext from "../../contexts/signupContext";
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
  const { setName } = useContext(UserContext);
  return <StyledInput placeholder={placeholder} onChangeText={setName} />;
};

export default InputBox;
