import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";

function AppButton({ children, onPress, style, textStyle }) {
  return (
    <TouchableOpacity style={[styles.startBtn, style]} onPress={onPress}>
      <AppText style={[styles.text, textStyle]}>{children}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  startBtn: {
    backgroundColor: colors.mPink,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  text: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "500",
    textTransform: "uppercase",
  },
});

export default AppButton;
