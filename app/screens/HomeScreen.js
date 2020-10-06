import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "../navigations/routes";

function HomeScreen({ navigation }) {
  return (
    <Screen style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/elephantChat.png")}
        resizeMode="contain"
      />
      <AppButton
        style={styles.startBtn}
        onPress={() => navigation.navigate(routes.SCREENING)}
      >
        start
      </AppButton>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 267,
    width: 300,
  },

  startBtn: {
    position: "absolute",
    top: "58%",
    left: "53%",
  },
});

export default HomeScreen;
