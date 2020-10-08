import React, { useEffect, useState } from "react";
import { Dimensions, View, StyleSheet, Text, Image } from "react-native";
import { Audio } from "expo-av";

import AppButton from "../../components/AppButton";
import AppText from "../../components/AppText";
import colors from "../../config/colors";
import Screen from "../../components/Screen";

function ScreeningSoundTest({ navigation }) {
  // sounds/music
  const [soundObj, setSoundObj] = useState(new Audio.Sound());
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    async function loadSounds() {
      Audio.setAudioModeAsync({
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
        playsInSilentModeIOS: true,
      });
      await soundObj.loadAsync(
        require("../../assets/test.mp3"),
        (initialStatus = { volume: 0.5 })
      );
    }

    loadSounds();
  }, []);

  const doPlay = () => {
    soundObj.playAsync();
    setIsPlaying(true);
  };

  return (
    <Screen style={styles.container}>
      <View style={styles.contentWrapper}>
        <Image
          resizeMode="contain"
          source={require("../../assets/parent.png")}
          style={styles.parentImg}
        />
        <AppText style={styles.intro}>
          Please hit PLAY and adjust the volume to a comfortable setting.
        </AppText>
        {!isPlaying && (
          <AppButton onPress={doPlay} style={styles.soundBtn}>
            Play
          </AppButton>
        )}

        {isPlaying && (
          <AppButton
            style={styles.nextBtn}
            onPress={() => {
              navigation.navigate("Actual");
              soundObj.stopAsync();
              setIsPlaying(false);
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
  container: { alignItems: "center", justifyContent: "center" },
  contentWrapper: {
    alignItems: "center",
    height: "90%",
    position: "absolute",
    top: "10%",
    width: "70%",
  },
  intro: { marginBottom: 30 },
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
  soundBtn: {
    width: 80,
    alignItems: "center",
  },
});

export default ScreeningSoundTest;
