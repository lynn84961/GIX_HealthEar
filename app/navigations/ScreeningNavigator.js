import React from "react";
import { Button, Text, View, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import colors from "../config/colors";

const Process1 = ({ navigation }) => (
  <Screen>
    <Text>Process 1</Text>
    <Button title="Go To P2" onPress={() => navigation.navigate("Process2")} />
  </Screen>
);
const Process2 = ({ navigation }) => (
  <Screen>
    <Text>Process 1</Text>
    <Button title="Leave" onPress={() => navigation.navigate("AppTab")} />
  </Screen>
);

const Stack = createStackNavigator();
const ScreeningNavigator = ({ navigation }) => (
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
                navigation.navigate("AppTab");
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
      name="Process1"
      component={Process1}
      options={{ headerLeft: () => null }}
    />
    <Stack.Screen name="Process2" component={Process2} />
  </Stack.Navigator>
);

export default ScreeningNavigator;
