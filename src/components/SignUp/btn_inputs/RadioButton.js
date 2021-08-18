import React from "react";
import styled from "styled-components/native";
import color from "../palette";

const Radio = styled.TouchableOpacity`
  width: 50%;
  height: 50px;
  borderBottomWidth: ${({ selected }) => (selected ? "2px" : "1px")};
  borderBottomColor: ${({ selected }) =>
    selected ? color.grey_0 :  color.grey_1};
`;

const StyledText = styled.Text`
  padding-top:16px;
  font-size: 14px;
  text-align: center;
  color: ${({ selected }) => (selected ? color.grey_0 : color.grey_1)};
`;

const RadioButton = ({ text, selected, onPress }) => {
  return (
    <Radio selected={selected} onPress={onPress}>
      <StyledText selected={selected}>{text}</StyledText>
    </Radio>
  );
};

export default RadioButton;
