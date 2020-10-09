import React, { useState } from "react";
import { View, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "./routes";
import ScreeningConnection from "../screens/Screening/ScreeningConnection";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import ScreeningIntro from "../screens/Screening/ScreeningIntro";
import ScreeningSoundTest from "../screens/Screening/ScreeningSoundTest";
import ScreeningActual from "../screens/Screening/ScreeningActual";
import ScreeningResult from "../screens/Screening/ScreeningResult";
import ScreeningSoundTest2 from "../screens/Screening/ScreeningSoundTest2";

//navigation.navigate(routes.APP_TAB)
const Stack = createStackNavigator();

function ScreeningNavigator({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: false,
          headerBackTitle: "Back",
          headerTitleStyle: {
            color: colors.mBlue,
            fontWeight: "bold",
            fontSize: 20,
          },
          headerTintColor: colors.mBlue,
          // headerLeft: () => {
          //   return (
          //     <View>
          //       <TouchableOpacity
          //         onPress={() => {
          //           navigation.goBack();
          //         }}
          //         style={{ flexDirection: "row", alignItems: "center" }}
          //       >
          //         <MaterialIcons
          //           name="keyboard-arrow-left"
          //           size={40}
          //           color={colors.mBlue}
          //           // style={{ borderColor: "black", borderWidth: 1 }}
          //         />
          //         <AppText
          //           style={{
          //             color: colors.mBlue,
          //             fontSize: 20,
          //             fontWeight: "bold",
          //           }}
          //         >
          //           Back
          //         </AppText>
          //       </TouchableOpacity>
          //     </View>
          //   );
          // },
          headerRight: () => {
            return (
              <View>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(true);
                  }}
                >
                  <MaterialCommunityIcons
                    name="close-circle-outline"
                    size={30}
                    color={colors.mBlue}
                    style={{ paddingRight: 10 }}
                  />
                </TouchableOpacity>
              </View>
            );
          },
        }}
      >
        <Stack.Screen
          name="Introduction"
          component={ScreeningIntro}
          options={{ headerLeft: () => null }}
        />
        <Stack.Screen name="Connection" component={ScreeningConnection} />
        <Stack.Screen name="Sound Test" component={ScreeningSoundTest} />
        <Stack.Screen
          name="Sound Test 2"
          component={ScreeningSoundTest2}
          options={{ headerTitle: "Sound Test" }}
        />
        <Stack.Screen name="Actual" component={ScreeningActual} />
        <Stack.Screen
          name="Result"
          component={ScreeningResult}
          options={{
            headerLeft: () => null,
            headerRight: () => {
              return (
                <View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("HistoryStack")}
                  >
                    <MaterialCommunityIcons
                      name="close-circle-outline"
                      size={30}
                      color={colors.mBlue}
                      style={{ paddingRight: 10 }}
                    />
                  </TouchableOpacity>
                </View>
              );
            },
          }}
        />
      </Stack.Navigator>

      <Modal visible={modalVisible}>
        <Screen style={styles.modalContainer}>
          <AppText>Sure you want to end the screening?</AppText>
          <View style={styles.btnContainer}>
            <AppButton
              onPress={() => navigation.navigate(routes.APP_TAB)}
              style={styles.endBtn}
            >
              End
            </AppButton>
            <AppButton onPress={() => setModalVisible(false)}>Stay</AppButton>
          </View>
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 20,
    width: "80%",
  },
  endBtn: {
    backgroundColor: colors.mBlue,
  },
  modalContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ScreeningNavigator;
