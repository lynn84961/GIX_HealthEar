import React from "react";
import { Dimensions, View, StyleSheet, Text, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as Yup from "yup";

import AppButton from "../../components/AppButton";
import AppForm from "../../components/AppForm";
import AppFormPicker from "../../components/AppFormPicker";
import AppText from "../../components/AppText";
import colors from "../../config/colors";
import Screen from "../../components/Screen";
import SubmitButton from "../../components/SubmitButton";

const validationSchema = Yup.object().shape({
  device: Yup.object()
    .required("Please select a device.")
    .nullable()
    .label("device"),
});

const devices = [
  {
    label: "Airpods",
    value: 1,
  },
  {
    label: "Samsung Galaxy Buds Live",
    value: 2,
  },
  {
    label: "Boss Mini 2",
    value: 3,
  },
];

function ScreeningConnection({ navigation }) {
  return (
    <Screen style={styles.container}>
      <View style={styles.contentWrapper}>
        <Image
          resizeMode="contain"
          source={require("../../assets/parent.png")}
          style={styles.parentImg}
        />
        <AppText style={styles.intro}>
          Please make sure your earbuds are connected to the phone.
        </AppText>

        <AppForm
          initialValues={{
            device: null,
          }}
          onSubmit={() => navigation.navigate("Sound Test")}
          validationSchema={validationSchema}
        >
          <AppFormPicker
            items={devices}
            icon="bluetooth-audio"
            name="device"
            placeholder="Select a Device"
          />
          <SubmitButton title="Next" style={styles.nextBtn} />
        </AppForm>
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
    width: "80%",
  },
  deviceContainer: {
    borderColor: colors.tBlue,
    borderWidth: 1,
    height: 200,
    width: "100%",
  },
  intro: { alignSelf: "flex-start", marginBottom: 30 },
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
});

export default ScreeningConnection;
