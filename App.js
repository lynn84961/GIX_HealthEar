import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text } from "react-native";

import Screen from "./app/components/Screen";
import AppTabNavigator from "./app/navigations/AppTabNavigator";
import navigationThemes from "./app/navigations/navigationThemes";
import ScreeningNavigator from "./app/navigations/ScreeningNavigator";
import RootNavigation from "./app/navigations/RootNavigation";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  return (
    <NavigationContainer theme={navigationThemes}>
      <RootNavigation />
    </NavigationContainer>
    // <ListingEditScreen />
  );
}

const styles = StyleSheet.create({});
