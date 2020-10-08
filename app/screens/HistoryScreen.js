import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
} from "react-native";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import colors from "../config/colors";

function HistoryScreen(props) {
  return (
    <Screen style={styles.container}>
      <ScrollView style={styles.SVContainer}>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.historyCard}
            onPress={() => alert("History Detail Showing")}
          >
            <AppText>test</AppText>
          </TouchableOpacity>
          {/* <AppButton onPress={() => alert("Pressed")}>history</AppButton> */}
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  historyCard: {
    backgroundColor: colors.white,
    borderRadius: 15,
    height: 200,
    marginVertical: 5,
    padding: 10,
    width: "100%",
  },
  startBtn: {
    backgroundColor: colors.mPink,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 13,
  },
  SVContainer: {
    // backgroundColor: "white",
    height: "100%",
    paddingHorizontal: 15,
    position: "absolute",
    width: "100%",
  },
});

export default HistoryScreen;
