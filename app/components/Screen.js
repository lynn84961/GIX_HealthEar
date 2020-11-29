import Constants from "expo-constants";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";

import colors from "../config/colors";

function Screen({ children, style }) {
  return (
    <LinearGradient
      colors={[colors.bgDayBlue, colors.bgDayYellow]}
      start={[0, 0]}
      end={[1, 1]}
      style={styles.linearGradient}
    >
      <SafeAreaView style={[styles.screen, style]}>
        <View style={[styles.view, style]}>{children}</View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  screen: {
    // backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: colors.mBlue,
    flex: 1,
    // paddingTop: Constants.statusBarHeight,
  },
  view: {
    flex: 1,
  },
});

export default Screen;
