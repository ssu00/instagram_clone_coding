import React, { createContext, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Nav from "./navigations/stack";

export const UserContext = createContext({
  user: { name: "", password: "", email: "", phone: "" },
  setName: () => {},
  setPassword: () => {},
  setEmail: () => {},
  setPhone: () => {},
});

const App = () => {
  return (
    <NavigationContainer>
      <Nav />
    </NavigationContainer>
  );
};

export default App;
