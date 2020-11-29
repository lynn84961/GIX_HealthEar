import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import colors from "../config/colors";

import HistoryScreen from "../screens/HistoryScreen";
import HistoryDetail from "../screens/HistoryDetail";
import routes from "./routes";

const Stack = createStackNavigator();

function HistoryNavigator({ navigation }) {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: false,
          headerBackTitle: "Back",
          headerTitleStyle: {
            color: colors.mBlue,
            fontWeight: "bold",
            fontSize: 20,
          },
          headerTintColor: colors.mBlue,
        }}
      >
        <Stack.Screen
          name={routes.HISTORY}
          component={HistoryScreen}
          options={{
            headerLeft: () => null,
          }}
        />
        <Stack.Screen
          name="History Detail"
          component={HistoryDetail}
          options={({ route }) => ({ title: route.params.item.date })}
          // headerLeft: () => null
        />
      </Stack.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 20,
    width: "80%",
  },
  endBtn: {
    backgroundColor: colors.mBlue,
  },
  modalContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HistoryNavigator;
