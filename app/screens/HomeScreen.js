import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";

function HomeScreen({ navigation }) {
  return (
    <Screen style={styles.container}>
      <Image
        style={{ width: 300, height: 267 }}
        source={require("../assets/elephantChat.png")}
        resizeMode="contain"
      />
      <TouchableOpacity
        style={styles.startBtn}
        onPress={() => navigation.navigate("Screening")}
      >
        {/* 8:54 */}
        <Text style={{ color: colors.white }}>START</Text>
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
    position: "absolute",
    top: "58%",
    left: "53%",
  },
});

export default HomeScreen;
