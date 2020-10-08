import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../../components/AppText";
import colors from "../../config/colors";
import Screen from "../../components/Screen";
import AppButton from "../../components/AppButton";

function ScreeningIntro({ navigation }) {
  return (
    <Screen style={styles.container}>
      <View style={styles.contentWrapper}>
        <Image
          resizeMode="contain"
          source={require("../../assets/parent.png")}
          style={styles.parentImg}
        />
        <AppText>Means this is a step for</AppText>
        <AppText style={styles.highlight}>PARENT</AppText>
        <Image
          resizeMode="contain"
          source={require("../../assets/child.png")}
          style={styles.childImg}
        />
        <AppText>Means this is a step for</AppText>
        <AppText style={styles.highlight}>KID</AppText>

        <AppButton
          style={styles.nextBtn}
          onPress={() => navigation.navigate("Connection")}
        >
          Got It
        </AppButton>
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
    // borderWidth: 1,
    // borderColor: "black",
  },

  childImg: {
    height: 60,
    marginBottom: 10,
    marginTop: 10,
    width: "25%",
  },

  highlight: {
    color: colors.mPink,
    fontWeight: "bold",
    marginBottom: 30,
  },

  nextBtn: {
    alignSelf: "center",
    bottom: 50,
    position: "absolute",
  },

  parentImg: {
    height: 60,
    marginBottom: 10,
    // marginRight: 5,
    width: "20%",
  },
});

export default ScreeningIntro;
