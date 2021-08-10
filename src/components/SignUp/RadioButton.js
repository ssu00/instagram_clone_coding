import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

const colors = {
  black: "#000000",
  grey: "#010101",
};
//colors 수정 필요
//border-top, bottom 어떻게 하는지?

const Radio = styled.TouchableOpacity`
  width: 50%;
  height: 50px;
  color: ${({ selected }) => (selected ? colors.black : colors.grey)};
`;

const RadioButton = (props) => {
  return (
    <View
      style={[
        {
          height: 24,
          width: 24,
          borderRadius: 12,
          borderWidth: 2,
          borderColor: "#000",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 50,
          marginLeft: 50,
        },
        props.style,
      ]}
    >
      {props.selected ? (
        <View
          style={{
            height: 12,
            width: 12,
            borderRadius: 6,
            backgroundColor: "#000",
            marginTop: 50,
            marginLeft: 50,
          }}
        />
      ) : null}
    </View>
  );
};

export default RadioButton;
