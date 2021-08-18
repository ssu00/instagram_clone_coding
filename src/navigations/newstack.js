import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyPage from "../components/MyPage/MyPage";
import Nav from "./stack";
const Stack = createStackNavigator();
const NS = ({form,handleChange}) => {
  return (
    <Stack.Navigator screenOptions={{ cardStyle: { backgroundColor: "#ffffff" } }}>
      <Stack.Screen name="Nav" options={{ headerShown: false }}>
        {({ navigation }) => (
        <Nav navigation={form,handleChange} />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default NS;
