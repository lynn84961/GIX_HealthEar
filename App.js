import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Modal, ScrollView, StyleSheet, Text, View } from "react-native";

import Screen from "./app/components/Screen";
import AppTabNavigator from "./app/navigations/AppTabNavigator";
import navigationThemes from "./app/navigations/navigationThemes";
import ScreeningNavigator from "./app/navigations/ScreeningNavigator";
import RootNavigation from "./app/navigations/RootNavigation";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ScreeningResult from "./app/screens/Screening/ScreeningResult";
import HistoryScreen from "./app/screens/HistoryScreen";
import ScreeningActual from "./app/screens/Screening/ScreeningActual";
import LandingScreen from "./app/screens/LandingScreen";
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import colors from "./app/config/colors";

export default function App() {
  const [modalVisible, setModalVisible] = useState(true);
  const modalHeader = (
    <View style={styles.modalHeader}>
      <AppText style={styles.title}>Disclaimer</AppText>
      <View style={styles.divider}></View>
    </View>
  );
  const modalBody = (
    <View style={styles.modalBody}>
      <ScrollView style={{ height: "70%" }}>
        <AppText style={styles.bodyText}>
          This product is not a substitute for medical advice, diagnosis, or
          treatment. The information provided here is for informational purposes
          only. You should not act or refrain from acting on the basis of any
          content included in this product without seeking professional medical
          advice first. Always seek the advice of your physician or other
          qualified health provider with any questions you may have regarding a
          medical condition.
        </AppText>
      </ScrollView>
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
            setModalVisible(false);
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
    <Modal transparent={true} visible={modalVisible}>
      <View style={styles.modal}>
        <View>{modalContainer}</View>
      </View>
    </Modal>
  );

  return (
    <>
      <NavigationContainer theme={navigationThemes}>
        <RootNavigation />
      </NavigationContainer>
      {modal}
    </>
  );
}
const styles = StyleSheet.create({
  bodyText: {
    color: colors.medium,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    // backgroundColor: "#00000000",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalContainer: {
    backgroundColor: "#f9fafb",
    width: "90%",
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
    height: "70%",
  },
  modalFooter: {},
  actions: {
    marginHorizontal: 5,
  },
  actionText: {
    color: "#fff",
  },
});
