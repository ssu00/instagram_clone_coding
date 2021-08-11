import React from "react";
import styled from "styled-components/native";
// import color from "./palette";

const Radio = styled.TouchableOpacity`
  width: 50%;
  height: 50px;
  borderBottomWidth: ${({ selected }) => (selected ? "2px" : "1px")};
  borderBottomColor: ${({ selected }) =>
    selected ? '#5a5a5a' : '#999999'};
`;

const StyledText = styled.Text`
  font-size: 20px;
  text-align: center;
  color: ${({ selected }) => (selected ? '#5a5a5a' : '#999999')};
`;

const RadioButton = ({ text, selected, onPress }) => {
  return (
    <Radio selected={selected} onPress={onPress}>
      <StyledText selected={selected}>{text}</StyledText>
    </Radio>
  );
};

export default RadioButton;
