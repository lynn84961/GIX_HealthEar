import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";

const width = "90%";
function ListItemSeparator(width) {
  return <View style={[styles.separator, width]} />;
}
const styles = StyleSheet.create({
  separator: {
    alignSelf: "center",
    width: width,
    height: 1,
    backgroundColor: colors.bgDayBlue,
  },
});
export default ListItemSeparator;
