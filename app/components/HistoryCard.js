import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";

function HistoryCard({ history, onPress }) {
  const leftEar = {
    color: colors.mBlue,
    text: "No Fluid",
    imgSrc: require("../assets/earBlueL.png"),
  };
  const rightEar = {
    color: colors.mBlue,
    text: "No Fluid",
    imgSrc: require("../assets/earBlueR.png"),
  };
  if (history.left) {
    leftEar.color = colors.mPink;
    leftEar.text = "Has Fluid";
    leftEar.imgSrc = require("../assets/earPinkL.png");
  }
  if (history.right) {
    rightEar.color = colors.mPink;
    rightEar.text = "Has Fluid";
    rightEar.imgSrc = require("../assets/earPinkR.png");
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.historyCard} onPress={onPress}>
        {/* date */}
        <View style={styles.sectionContainer}>
          {/* <AppText style={styles.sectionTitle}>Time:</AppText> */}
          <AppText style={[styles.sectionContent, { paddingRight: 5 }]}>
            {history.date}
          </AppText>
          <AppText style={styles.sectionContent}>{history.time}</AppText>
        </View>
        {/* result */}
        <View style={styles.earWrapper}>
          <View style={styles.ear}>
            <AppText style={{ color: leftEar.color }}>Left</AppText>
            <Image
              style={styles.earImg}
              source={leftEar.imgSrc}
              resizeMode="contain"
            />
            <AppText style={{ color: leftEar.color, fontWeight: "bold" }}>
              {leftEar.text}
            </AppText>
          </View>
          <View style={styles.ear}>
            <AppText style={{ color: rightEar.color }}>Right</AppText>
            <Image
              style={styles.earImg}
              source={rightEar.imgSrc}
              resizeMode="contain"
            />
            <AppText style={{ color: rightEar.color, fontWeight: "bold" }}>
              {rightEar.text}
            </AppText>
          </View>
        </View>
      </TouchableOpacity>
      {/* <AppButton onPress={() => alert("Pressed")}>history</AppButton> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  earWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  ear: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 25,
  },
  earImg: {
    width: 80,
    height: 96,
  },
  historyCard: {
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 10,
    height: 220,
    justifyContent: "center",
    marginTop: 10,
    padding: 10,
    width: "100%",
  },
  hasFluid: {
    color: colors.mPink,
    fontWeight: "bold",
  },
  startBtn: {
    backgroundColor: colors.mPink,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 13,
  },

  sectionContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginVertical: 5,
    width: "95%",
  },
  sectionTitle: {
    color: colors.medium,
    // fontWeight: "bold",
    marginRight: 5,
  },
  sectionContent: {
    color: colors.medium,
  },
});

export default HistoryCard;
