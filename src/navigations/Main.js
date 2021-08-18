import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { InitScreen } from "../screens";
import { NavigationContainer } from "@react-navigation/native";
import Registration from "../components/SignUp/Registration";
import LoginStack from "./Login";
const Stack = createStackNavigator();
const MainNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ cardStyle: { backgroundColor: "#ffffff" } }}>
            <Stack.Screen name="Init" options={{ headerShown: false }}>
            {({ navigation }) => (
            <InitScreen navigation={navigation} />
            )}
            </Stack.Screen>
            <Stack.Screen name="Register" options={{ headerShown: false }}>
                {({ navigation }) => (
                <Registration navigation={navigation} />
                )}
            </Stack.Screen>
            <Stack.Screen name="SignIn" options={{ headerShown: false }}>
                {({ navigation }) => (
                <LoginStack navigation={navigation} />
                )}
            </Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
    );
};

export default MainNavigator;
