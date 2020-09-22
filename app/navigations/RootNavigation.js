import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AppTabNavigator from "./AppTabNavigator";
import colors from "../config/colors";
import ScreeningNavigator from "./ScreeningNavigator";

const Stack = createStackNavigator();
const RootNavigation = () => (
  <Stack.Navigator
    mode="modal"
    screenOptions={{ gestureEnabled: false, headerShown: false }}
  >
    <Stack.Screen name="AppTab" component={AppTabNavigator} />
    <Stack.Screen name="Screening" component={ScreeningNavigator} />
  </Stack.Navigator>
);

export default RootNavigation;
