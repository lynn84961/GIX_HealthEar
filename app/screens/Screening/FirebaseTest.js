// @refresh reset
import React from "react";
import { View, StyleSheet, Text, Image, LogBox } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as firebase from "firebase";
import "firebase/firestore";

import AppText from "../../components/AppText";
import colors from "../../config/colors";
import Screen from "../../components/Screen";
import AppButton from "../../components/AppButton";

// const firebaseConfig = {
//   apiKey: "AIzaSyA1tQuxu4JCLlmm9z7g2yNTNuamX_y9QYE",
//   authDomain: "healthear-firebase-test.firebaseapp.com",
//   databaseURL: "https://healthear-firebase-test.firebaseio.com",
//   projectId: "healthear-firebase-test",
//   storageBucket: "healthear-firebase-test.appspot.com",
//   messagingSenderId: "660334492622",
//   appId: "1:660334492622:web:83b314b958e3ac1142899f",
// };

// // console.log(firebase.app.length);
// // if (firebase.app.length === 1) {
// // firebase.initializeApp(firebaseConfig);
// // }
// // console.log(firebase.app.length);

// LogBox.ignoreAllLogs(["Setting a time for a long period of time"]);
// var result = {};
// firebase
//   .database()
//   .ref()
//   .orderByChild("dateAdded")
//   .limitToLast(1)
//   .on("value", (snapshot) => {
//     console.log(snapshot);
//     result = snapshot.val();
//   });
// console.log(result.right);

function FirebaseTest() {
  return (
    <Screen style={styles.container}>
      <View style={styles.contentWrapper}>
        <AppText>Means this is a step for</AppText>
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
    width: "70%",
    // borderWidth: 1,
    // borderColor: "black",
  },
});

export default FirebaseTest;
