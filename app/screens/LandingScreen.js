import React, { useState } from "react";
import {
  Alert,
  Modal,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "../navigations/routes";

function LandingScreen({ navigation }) {
  const modalHeader = (
    <View style={styles.modalHeader}>
      <Text style={styles.title}>Disclaimer</Text>
      <View style={styles.divider}></View>
    </View>
  );
  const modalBody = (
    <View style={styles.modalBody}>
      <AppText style={styles.bodyText}>
        This product is not a substitute for medical advice, diagnosis, or
        treatment. The information provided here is for informational purposes
        only. You should not act or refrain from acting on the basis of any
        content included in this product without seeking professional medical
        advice first. Always seek the advice of your physician or other
        qualified health provider with any questions you may have regarding a
        medical condition.
      </AppText>
    </View>
  );
  const modalFooter = (
    <View style={styles.modalFooter}>
      <View style={styles.divider}></View>
      <View style={{ flexDirection: "row-reverse", margin: 10 }}>
        <AppButton
          style={{ ...styles.actions }}
          onPress={() => {
            alert("You must confirm to continue.");
          }}
        >
          No
        </AppButton>
        <AppButton
          style={{ ...styles.actions, backgroundColor: colors.mBlue }}
          onPress={() => {
            navigation.navigate(routes.APP_TAB);
          }}
        >
          Confirm
        </AppButton>
      </View>
    </View>
  );
  const modalContainer = (
    <View style={styles.modalContainer}>
      {modalHeader}
      {modalBody}
      {modalFooter}
    </View>
  );
  const modal = (
    <Screen style={styles.modal}>
      <View>{modalContainer}</View>
    </Screen>
  );
  return <>{modal}</>;
}

const styles = StyleSheet.create({
  bodyText: {
    color: colors.medium,
  },
  container: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    // backgroundColor: "#00000000",
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalContainer: {
    backgroundColor: "#f9fafb",
    width: "80%",
    borderRadius: 10,
    padding: 5,
  },
  modalHeader: {},
  title: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 25,
    padding: 15,
    color: colors.mBlue,
  },
  divider: {
    width: "100%",
    height: 0,
    backgroundColor: "lightgray",
  },
  modalBody: {
    backgroundColor: "#ffffff00",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  modalFooter: {},
  actions: {
    marginHorizontal: 5,
  },
  actionText: {
    color: "#fff",
  },
});

export default LandingScreen;
