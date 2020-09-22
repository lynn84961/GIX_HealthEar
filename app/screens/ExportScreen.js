import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";

function ExportScreen(props) {
  return (
    <Screen style={styles.container}>
      <TouchableOpacity
        style={styles.startBtn}
        onPress={() => {
          alert("Pressed");
        }}
      >
        {/* 8:54 */}
        <Text style={{ color: colors.white }}>Export</Text>
      </TouchableOpacity>
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

export default ExportScreen;
