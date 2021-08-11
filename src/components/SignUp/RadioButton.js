import React from "react";
import styled from "styled-components/native";
import color from "./palette";

const Radio = styled.TouchableOpacity`
  width: 50%;
  height: 50px;
  borderBottomWidth: ${({ selected }) => (selected ? "2px" : "1px")};
  borderBottomColor: ${({ selected }) =>
    selected ? color.grey_0 : color.grey_1};
`;

const StyledText = styled.Text`
  width: 50vw;
  font-size: 20px;
  text-align: center;
  color: ${({ selected }) => (selected ? color.grey_0 : color.grey_1)};
`;

const RadioButton = ({ value, selected,onPress }) => {
  return (
    <Radio selected={selected} onPress={onPress}>
      <StyledText selected={selected}>{value}</StyledText>
    </Radio>
  );
};

export default RadioButton;
