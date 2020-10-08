import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";
import colors from "../config/colors";

function HistoryScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppButton onPress={() => alert("Pressed")}>history</AppButton>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },

  startBtn: {
    backgroundColor: colors.mPink,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 13,
  },
});

export default HistoryScreen;
