import React from "react";

import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../pages/Login";
import { color } from "../core/helpers";

const Stack = createStackNavigator();

const Routes = () => (
  <>
    <StatusBar backgroundColor={color.blueLight1} barStyle="dark-content" />
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  </>
);

export default Routes;
