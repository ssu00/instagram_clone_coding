import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Step01,Step02,Step03,Step04,Step05,Step06,Step07 } from "../screens";
const Stack = createStackNavigator();
const SignUpStack = ({ navigation, form, handleChange }) => {
  return (
    <Stack.Navigator screenOptions={{ cardStyle: { backgroundColor: "#ffffff" } }}>
      <Stack.Screen name="Step01" options={{ headerShown: false }}>
        {({ navigation }) => (
        <Step01 navigation={navigation} form={form} handleChange={handleChange} />
        )}
      </Stack.Screen>
      <Stack.Screen name="Step02" options={{ headerShown: false }}>
        {({ navigation }) => (
        <Step02 navigation={navigation} form={form} handleChange={handleChange} />
        )}
      </Stack.Screen>
      <Stack.Screen name="Step03" options={{ headerShown: false }}>
        {({ navigation }) => (
        <Step03 navigation={navigation} form={form} handleChange={handleChange} />
        )}
      </Stack.Screen>
      <Stack.Screen name="Step04" options={{ headerShown: false }}>
        {({ navigation }) => (
        <Step04 navigation={navigation} form={form} />
        )}
      </Stack.Screen>
      <Stack.Screen name="Step05" options={{ headerShown: false }}>
        {({ navigation }) => (
        <Step05 navigation={navigation} />
        )}
      </Stack.Screen>
      <Stack.Screen name="Step06" options={{ headerShown: false }}>
        {({ navigation }) => (
        <Step06 navigation={navigation} form={form} />
        )}
      </Stack.Screen>
      <Stack.Screen name="Step07" options={{ headerShown: false }}>
        {({ navigation }) => (
        <Step07 navigation={navigation} form={form} handleChange={handleChange} />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default SignUpStack;
