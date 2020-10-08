import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text } from "react-native";

import Screen from "./app/components/Screen";
import AppTabNavigator from "./app/navigations/AppTabNavigator";
import navigationThemes from "./app/navigations/navigationThemes";
import ScreeningNavigator from "./app/navigations/ScreeningNavigator";
import RootNavigation from "./app/navigations/RootNavigation";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ScreeningResult from "./app/screens/Screening/ScreeningResult";
import HistoryScreen from "./app/screens/HistoryScreen";

export default function App() {
  return (
    <NavigationContainer theme={navigationThemes}>
      <RootNavigation />
    </NavigationContainer>
    // <HistoryScreen />
  );
}

const styles = StyleSheet.create({});
