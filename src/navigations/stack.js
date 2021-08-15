import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Begin, Second, Third, Fourth, Fifth, Sixth, Seventh, Final } from "../components/SignUp";
const Stack = createStackNavigator();
const Nav = ({ form, handleChange }) => {
  return (
    <Stack.Navigator screenOptions={{ cardStyle: { backgroundColor: "#ffffff" } }}>
      <Stack.Screen name="First" component={Begin} options={{ headerShown: false }} />
      <Stack.Screen name="Second" options={{ headerShown: false }}>
        {({ navigation }) => (
        <Second navigation={navigation} form={form} handleChange={handleChange} />
        )}
      </Stack.Screen>
      <Stack.Screen name="Third" options={{ headerShown: false }}>
        {({ navigation }) => (
        <Third navigation={navigation} form={form} handleChange={handleChange} />
        )}
      </Stack.Screen>
      <Stack.Screen name="Fourth" options={{ headerShown: false }}>
        {({ navigation }) => (
        <Fourth navigation={navigation} form={form} handleChange={handleChange} />
        )}
      </Stack.Screen>
      <Stack.Screen name="Fifth" options={{ headerShown: false }}>
        {({ navigation }) => (
        <Fifth navigation={navigation} form={form} />
        )}
      </Stack.Screen>
      <Stack.Screen name="Sixth" options={{ headerShown: false }}>
        {({ navigation }) => (
        <Sixth navigation={navigation} />
        )}
      </Stack.Screen>
      <Stack.Screen name="Seventh" options={{ headerShown: false }}>
        {({ navigation }) => (
        <Seventh navigation={navigation} form={form} />
        )}
      </Stack.Screen>
      <Stack.Screen name="Final" options={{ headerShown: false }}>
        {({ navigation }) => (
        <Final navigation={navigation} form={form} handleChange={handleChange} />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default Nav;
