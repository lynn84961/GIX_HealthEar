import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function PickerItem({ item, numberOfLines, onPress, style }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={[styles.text, style]} numberOfLines={numberOfLines}>
        {item.label}
      </AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.mBlue,
    padding: 10,
  },
});
export default PickerItem;
