import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Nav from "../../navigations/stack";

const SignUp = ({form,handleChange}) => {
  return (
    <NavigationContainer>
      <Nav form={form} handleChange={handleChange}/>
    </NavigationContainer>
  );
};

export default SignUp;
