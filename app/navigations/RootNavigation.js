import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AppTabNavigator from "./AppTabNavigator";
import colors from "../config/colors";
import ScreeningNavigator from "./ScreeningNavigator";
import routes from "./routes";
import LandingScreen from "../screens/LandingScreen";

const Stack = createStackNavigator();
const RootNavigation = () => (
  <Stack.Navigator
    mode="modal"
    screenOptions={{ gestureEnabled: false, headerShown: false }}
  >
    {/* <Stack.Screen name="Landing" component={LandingScreen} /> */}
    <Stack.Screen name={routes.APP_TAB} component={AppTabNavigator} />
    <Stack.Screen name={routes.SCREENING} component={ScreeningNavigator} />
  </Stack.Navigator>
);

export default RootNavigation;
