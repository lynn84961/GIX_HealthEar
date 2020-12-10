import React, { useEffect, useState } from "react";
import { Dimensions, View, StyleSheet, Text, Image } from "react-native";
import { Audio } from "expo-av";
import { MaterialIcons } from "@expo/vector-icons";

import AppButton from "../../components/AppButton";
import AppText from "../../components/AppText";
import colors from "../../config/colors";
import Screen from "../../components/Screen";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function ScreeningSoundTestR2({ navigation }) {
  return (
    <Screen style={styles.container}>
      <View style={styles.contentWrapper}>
        <Image
          resizeMode="contain"
          source={require("../../assets/parent.png")}
          style={styles.parentImg}
        />
        <AppText style={styles.intro}>
          1. Please put the <AppText style={styles.side}>RIGHT</AppText> earbud
          on for your kid.
        </AppText>
        <AppText style={styles.intro}>
          2. Turn your phone's volume to 50%.
        </AppText>

        <AppButton
          style={styles.nextBtn}
          onPress={() => {
            navigation.navigate("Sound Test 2 R2");
          }}
        >
          Next
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
  },
  intro: {
    // alignItems: "center",
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  side: {
    color: colors.mPink,
    fontWeight: "bold",
  },
  nextBtn: {
    alignSelf: "center",
    bottom: 50,
    position: "absolute",
  },
  parentImg: {
    height: 60,
    marginBottom: 10,
    width: 50,
  },
  soundIcon: {
    marginTop: 20,
  },
});

export default ScreeningSoundTestR2;
