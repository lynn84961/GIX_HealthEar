import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import SubmitButton from "../components/SubmitButton";
import AppForm from "../components/AppForm";
import AppFormPicker from "../components/AppFormPicker";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  category: Yup.object()
    .required("Please select bluetooth earphones.")
    .nullable()
    .label("device"),
});

const categories = [
  {
    label: "Airpods",
    value: 1,
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
  },
  {
    label: "Samsung Galaxy Buds Live",
    value: 2,
    backgroundColor: "#fd9644",
    icon: "car",
  },
  { label: "Cameras", value: 3, backgroundColor: "#fed330", icon: "camera" },
];

function ListingEditScreen(props) {
  const handleSubmit = () => {
    alert("Success!");
  };

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          device: null,
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormPicker
          items={categories}
          icon="bluetooth-audio"
          name="device"
          placeholder="Select a Device"
        />
        <SubmitButton title="Next" />
      </AppForm>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
