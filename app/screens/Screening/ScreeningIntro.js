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
        <View style={styles.introContainer}>
          <Image
            resizeMode="contain"
            source={require("../../assets/parent.png")}
            style={styles.parentImg}
          />
          <MaterialCommunityIcons
            name="arrow-right-bold"
            size={40}
            color={colors.tBlue}
          />
          <AppText style={styles.intro}>
            Means this is a step for{" "}
            <AppText style={styles.highlight}>PARENT</AppText>
          </AppText>
        </View>
        <View style={styles.introContainer}>
          <Image
            resizeMode="contain"
            source={require("../../assets/child.png")}
            style={styles.parentImg}
          />
          <MaterialCommunityIcons
            name="arrow-right-bold"
            size={40}
            color={colors.tBlue}
          />
          <AppText style={styles.intro}>
            Means this is a step for{" "}
            <AppText style={styles.highlight}>KID</AppText>
          </AppText>
        </View>
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

  intro: {
    //   marginBottom: 30
    width: "70%",
  },
  nextBtn: {
    alignSelf: "center",
    bottom: 50,
    position: "absolute",
  },
  highlight: {
    color: colors.mPink,
    fontWeight: "bold",
  },
  introContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
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
