import React, { useState } from "react";
import {
  Button,
  Text,
  View,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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

const Process2 = ({ navigation }) => (
  <Screen>
    <Text>Process 1</Text>
    <Button title="Leave" onPress={() => navigation.navigate(routes.APP_TAB)} />
  </Screen>
);
//navigation.navigate(routes.APP_TAB)
const Stack = createStackNavigator();

function ScreeningNavigator({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: false,
          headerTitleStyle: {
            color: colors.mBlue,
            fontWeight: "bold",
            fontSize: 20,
          },
          headerTintColor: colors.mBlue,
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
                    onPress={() => navigation.navigate(routes.HISTORY)}
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
        <Stack.Screen name="Process2" component={Process2} />
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
