import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";

function ListItemSeparator() {
  return <View style={styles.separator} />;
}
const styles = StyleSheet.create({
  separator: {
    alignSelf: "center",
    width: "90%",
    height: 1,
    backgroundColor: colors.bgDayBlue,
  },
});
export default ListItemSeparator;
