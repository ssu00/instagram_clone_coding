import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Begin, Second, Third, Fourth, Fifth } from "../components/SignUp";
const Stack = createStackNavigator();
const Nav = () => {
  return (
    <Stack.Navigator
      screenOptions={{ cardStyle: { backgroundColor: "#ffffff" } }}
    >
      <Stack.Screen name="First" component={Begin} options={{headerShown:false}}/>
      <Stack.Screen
        name="Second"
        component={Second}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Third"
        component={Third}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Fourth"
        component={Fourth}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Fifth"
        component={Fifth}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Nav;
