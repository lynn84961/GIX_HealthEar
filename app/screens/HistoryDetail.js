import React, { useState } from "react";
import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";

import AppText from "../components/AppText";
import colors from "../config/colors";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import defaultStyles from "../config/style";

function HistoryDetail({ navigation, route }) {
  const history = route.params.item;

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
  const inputPlaceholder = "Enter your notes here";

  var showSuggestion = false;
  if (history.left || history.right) {
    showSuggestion = true;
  }

  return (
    <Screen style={styles.container}>
      {/* <View style={styles.contentWrapper}> */}
      <ScrollView style={styles.dashboardWrapper}>
        <KeyboardAvoidingView
          behavior={"position"}
          //Platform.OS == "ios" ? "padding" : "height"
          style={{ alignItem: "center", flex: 1 }}
        >
          <View style={styles.contentWrapper}>
            <View style={styles.earWrapper}>
              <View style={styles.ear}>
                <AppText style={{ color: leftEar.color }}>Left</AppText>
                <Image
                  style={{ width: 100, height: 120 }}
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
                  style={{ width: 100, height: 120 }}
                  source={rightEar.imgSrc}
                  resizeMode="contain"
                />
                <AppText style={{ color: rightEar.color, fontWeight: "bold" }}>
                  {rightEar.text}
                </AppText>
              </View>
            </View>

            <ListItemSeparator width="100%" />

            {showSuggestion && (
              <View style={styles.sgContainer}>
                <AppText style={styles.sectionTitle}>Suggestion</AppText>
                <Text style={styles.sg}>
                  Our scan shows there is likely fluid in the middle ear. This
                  is a condition that warrants a doctor’s consultation.
                </Text>
              </View>
            )}

            <ListItemSeparator width="100%" />

            <View style={styles.ntContainer}>
              <View style={styles.ntTitleContainer}>
                <AppText style={styles.sectionTitle}>Notes</AppText>
                {/* <MaterialIcons
                  name="edit"
                  size={20}
                  color={colors.mBlue}
                  // style={{ borderColor: "black", borderWidth: 1 }}
                /> */}
              </View>
              <TextInput
                multiline={true}
                name="note"
                placeholderTextColor={defaultStyles.colors.medium}
                placeholder={inputPlaceholder}
                style={[defaultStyles.text, styles.input]}
                textAlignVertical={"top"}
              ></TextInput>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      {/* </View> */}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.white,
    justifyContent: "center",
  },
  contentWrapper: {
    alignItems: "center",
    justifyContent: "center",
    // flex: 1,
    width: "100%",
    // backgroundColor: "blue",
  },

  intro: { marginBottom: 30 },

  parentImg: {
    height: 60,
    marginBottom: 10,
    width: 50,
  },

  //old
  dashboardWrapper: {
    backgroundColor: "white",
    height: "100%",
    paddingHorizontal: 15,
    position: "absolute",
    width: "100%",
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
  input: {
    backgroundColor: colors.light,
    borderRadius: 5,
    height: 100,
    padding: 15,
    width: "100%",
    // marginLeft: "5%",
    marginTop: "2%",
  },

  sg: {
    width: "95%",
    marginLeft: "5%",
    marginTop: "2%",
    flex: 1,
    color: colors.medium,
    fontSize: 18,
  },
  sectionTitle: {
    color: colors.mBlue,
    // paddingLeft: "5%",
    fontWeight: "bold",
  },
  sgContainer: {
    width: "95%",
    paddingVertical: 10,
  },

  ntTitleContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    // borderWidth: 1,
    // borderColor: "black",
  },
  ntContainer: {
    width: "100%",
    // borderBottomColor: colors.bgDayBlue,
    // borderBottomWidth: 2,
    paddingVertical: 10,
  },
});

export default HistoryDetail;
