import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import HomeScreen from "../screens/HomeScreen";
import HistoryScreen from "../screens/HistoryScreen";
import ExportScreen from "../screens/ExportScreen";
import routes from "./routes";

const Tab = createBottomTabNavigator();
const AppTabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: colors.mPink,
      inactiveTintColor: colors.mBlue,
      tabStyle: {
        paddingVertical: 3,
        backgroundColor: "white",
      },
    }}
  >
    <Tab.Screen
      name={routes.HOME}
      component={HomeScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialIcons name={"hearing"} size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name={routes.HISTORY}
      component={HistoryScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialIcons name={"history"} size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name={routes.EXPORT}
      component={ExportScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name={"export"} size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppTabNavigator;
