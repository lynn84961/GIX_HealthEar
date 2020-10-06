import React from "react";
import { Dimensions, View, StyleSheet, Text, Image } from "react-native";

import AppText from "../../components/AppText";
import colors from "../../config/colors";
import Screen from "../../components/Screen";

function ScreeningResult({ navigation }) {
  return (
    <Screen style={styles.container}>
      <View style={styles.contentWrapper}>
        <Image
          resizeMode="contain"
          source={require("../../assets/parent.png")}
          style={styles.parentImg}
        />
        <AppText style={styles.intro}>Result</AppText>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", justifyContent: "center" },
  contentWrapper: {
    alignItems: "center",
    height: "90%",
    position: "absolute",
    top: "10%",
    width: "70%",
  },

  intro: { marginBottom: 30 },

  parentImg: {
    height: 60,
    marginBottom: 10,
    width: 50,
  },
});

export default ScreeningResult;
