import React, { useState } from "react";
import { View, StyleSheet, Text, Image, Modal } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../../components/AppText";
import colors from "../../config/colors";
import Screen from "../../components/Screen";
import AppButton from "../../components/AppButton";

function ScreeningReady({ navigation }) {
  return (
    <Screen style={styles.container}>
      <View style={styles.contentWrapper}>
        <Image
          resizeMode="contain"
          source={require("../../assets/parent.png")}
          style={styles.parentImg}
        />
        <AppText style={styles.parent}>
          Please hand the phone to your kid.
        </AppText>
        <Image
          resizeMode="contain"
          source={require("../../assets/childPink.png")}
          style={styles.childImg}
        />
        <AppText style={styles.child}>Let's watch an animation!</AppText>

        <AppButton
          style={styles.nextBtn}
          onPress={() => {
            navigation.navigate("Actual");
          }}
        >
          Start
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
    width: "80%",
    // borderWidth: 1,
    // borderColor: "black",
  },

  nextBtn: {
    alignSelf: "center",
    bottom: 50,
    position: "absolute",
  },
  child: {
    color: colors.mPink,
    fontWeight: "bold",
  },
  childImg: {
    height: 60,
    marginBottom: 10,
    // marginRight: 5,
    width: "25%",
  },
  modalContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  nextBtn: {
    alignSelf: "center",
    bottom: 50,
    position: "absolute",
  },
  parent: {
    marginBottom: 30,
    // width: "70%",
  },
  parentImg: {
    height: 60,
    marginBottom: 10,
    // marginRight: 5,
    width: "20%",
  },
});

export default ScreeningReady;
