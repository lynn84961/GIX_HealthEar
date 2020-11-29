import React, { useEffect, useState } from "react";
import { Dimensions, View, StyleSheet, Text, Image } from "react-native";
import { Audio } from "expo-av";
import { MaterialIcons } from "@expo/vector-icons";

import AppButton from "../../components/AppButton";
import AppText from "../../components/AppText";
import colors from "../../config/colors";
import Screen from "../../components/Screen";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function ScreeningSoundTest2({ navigation }) {
  // sounds/music
  const [soundObj, setSoundObj] = useState(new Audio.Sound());
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioPlayed, setAudioPlayed] = useState(false);

  useEffect(() => {
    async function loadSounds() {
      Audio.setAudioModeAsync({
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
        playsInSilentModeIOS: true,
      });
      await soundObj.loadAsync(
        require("../../assets/test.mp3"),
        (initialStatus = { volume: 0.02 })
        //0.001
      );
    }

    loadSounds();
  }, []);

  const doPlay = () => {
    soundObj.playAsync();
    setIsPlaying(true);
    ShowNextButton();
  };
  function ShowNextButton() {
    setTimeout(function () {
      //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
      setAudioPlayed(true);
    }, 5000);
  }
  return (
    <Screen style={styles.container}>
      <View style={styles.contentWrapper}>
        <Image
          resizeMode="contain"
          source={require("../../assets/parent.png")}
          style={styles.parentImg}
        />
        <AppText style={styles.intro}>3. Press the play button below.</AppText>
        <AppText style={styles.intro}>
          We will start calibrating the sound volume from{" "}
          <AppText style={{ color: colors.mPink, fontWeight: "bold" }}>
            lowest
          </AppText>{" "}
          to a proper setting.
        </AppText>

        {!isPlaying && (
          <TouchableWithoutFeedback onPress={doPlay}>
            <MaterialIcons
              name="play-circle-filled"
              size={80}
              style={styles.soundIcon}
              color={colors.mPink}
            />
          </TouchableWithoutFeedback>
        )}
        {!audioPlayed && isPlaying && (
          <AppText style={styles.adjText}>Calibrating volume...</AppText>
        )}
        {audioPlayed && (
          <AppText style={styles.adjText}>Calibration done!</AppText>
        )}

        {audioPlayed && (
          <AppButton
            style={styles.nextBtn}
            onPress={() => {
              navigation.navigate("Ready");
              soundObj.stopAsync();
              setIsPlaying(false);
              setAudioPlayed(false);
            }}
          >
            Next
          </AppButton>
        )}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  adjText: {
    color: colors.mPink,
    fontWeight: "bold",
    marginTop: 25,
  },
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

export default ScreeningSoundTest2;
