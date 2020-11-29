import React, { useState } from "react";
import {
  Animated,
  Dimensions,
  Easing,
  View,
  StyleSheet,
  Text,
  Image,
  Modal,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../../components/AppText";
import CountDown from "react-native-countdown-component";
import colors from "../../config/colors";
import Screen from "../../components/Screen";
import AppButton from "../../components/AppButton";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const result = {
  left: true,
  right: false,
};
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
const tdOffset = 2000;

function ScreeningActual({ navigation }) {
  const spinValue = useState(new Animated.Value(-1))[0];
  function rotateElephant() {
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear, // Easing is an additional import from react-native
      useNativeDriver: true, // To make use of native driver for performance
    }).start((event) => {
      if (event.finished) {
        defaultElephant();
      }
    });
  }
  function defaultElephant() {
    Animated.timing(spinValue, {
      toValue: -1,
      duration: 1000,
      easing: Easing.linear, // Easing is an additional import from react-native
      useNativeDriver: true, // To make use of native driver for performance
    }).start((event) => {
      if (event.finished) {
        rotateElephant();
      }
    });
  }
  // Next, interpolate beginning and end values (in this case 0 and 1)
  const spin = spinValue.interpolate({
    inputRange: [-1, 1],
    outputRange: ["-30deg", "30deg"],
  });

  //red
  const moveRedBlnValue = useState(
    new Animated.ValueXY({
      x: Math.floor(Math.random() * (windowWidth - 100)),
      y: windowHeight + 100,
    })
  )[0];
  function moveRedBln() {
    const animateDuration = Math.random() * 2000 + 3000;
    const timeoutDuration = Math.random() * tdOffset;
    setTimeout(function () {
      //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
      Animated.timing(moveRedBlnValue, {
        toValue: {
          x: Math.floor(Math.random() * (windowWidth - 100)),
          y: -200,
        },
        duration: animateDuration,
        useNativeDriver: false,
      }).start((event) => {
        if (event.finished) {
          defaultRedBln();
        }
      });
    }, timeoutDuration);
  }

  function defaultRedBln() {
    Animated.timing(moveRedBlnValue, {
      toValue: {
        x: Math.floor(Math.random() * (windowWidth - 100)),
        y: windowHeight + 100,
      },
      duration: 1,
      useNativeDriver: false,
    }).start((event) => {
      if (event.finished) {
        moveRedBln();
      }
    });
  }

  //Blue
  const moveBlueBlnValue = useState(
    new Animated.ValueXY({
      x: Math.floor(Math.random() * (windowWidth - 100)),
      y: windowHeight + 100,
    })
  )[0];
  function moveBlueBln() {
    const animateDuration = Math.random() * 2000 + 3000;
    const timeoutDuration = Math.random() * tdOffset;
    setTimeout(function () {
      //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
      Animated.timing(moveBlueBlnValue, {
        toValue: {
          x: Math.floor(Math.random() * (windowWidth - 100)),
          y: -200,
        },
        duration: animateDuration,
        useNativeDriver: false,
      }).start((event) => {
        if (event.finished) {
          defaultBlueBln();
        }
      });
    }, timeoutDuration);
  }

  function defaultBlueBln() {
    Animated.timing(moveBlueBlnValue, {
      toValue: {
        x: Math.floor(Math.random() * (windowWidth - 100)),
        y: windowHeight + 100,
      },
      duration: 1,
      useNativeDriver: false,
    }).start((event) => {
      if (event.finished) {
        moveBlueBln();
      }
    });
  }

  //Yellow
  const moveYellowBlnValue = useState(
    new Animated.ValueXY({
      x: Math.floor(Math.random() * (windowWidth - 100)),
      y: windowHeight + 100,
    })
  )[0];
  function moveYellowBln() {
    const animateDuration = Math.random() * 2000 + 3000;
    const timeoutDuration = Math.random() * tdOffset;
    setTimeout(function () {
      //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
      Animated.timing(moveYellowBlnValue, {
        toValue: {
          x: Math.floor(Math.random() * (windowWidth - 100)),
          y: -200,
        },
        duration: animateDuration,
        useNativeDriver: false,
      }).start((event) => {
        if (event.finished) {
          defaultYellowBln();
        }
      });
    }, timeoutDuration);
  }

  function defaultYellowBln() {
    Animated.timing(moveYellowBlnValue, {
      toValue: {
        x: Math.floor(Math.random() * (windowWidth - 100)),
        y: windowHeight + 100,
      },
      duration: 1,
      useNativeDriver: false,
    }).start((event) => {
      if (event.finished) {
        moveYellowBln();
      }
    });
  }

  //Green
  const moveGreenBlnValue = useState(
    new Animated.ValueXY({
      x: Math.floor(Math.random() * (windowWidth - 100)),
      y: windowHeight + 100,
    })
  )[0];
  function moveGreenBln() {
    const animateDuration = Math.random() * 2000 + 3000;
    const timeoutDuration = Math.random() * tdOffset;
    setTimeout(function () {
      //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
      Animated.timing(moveGreenBlnValue, {
        toValue: {
          x: Math.floor(Math.random() * (windowWidth - 100)),
          y: -200,
        },
        duration: animateDuration,
        useNativeDriver: false,
      }).start((event) => {
        if (event.finished) {
          defaultGreenBln();
        }
      });
    }, timeoutDuration);
  }

  function defaultGreenBln() {
    Animated.timing(moveGreenBlnValue, {
      toValue: {
        x: Math.floor(Math.random() * (windowWidth - 100)),
        y: windowHeight + 100,
      },
      duration: 1,
      useNativeDriver: false,
    }).start((event) => {
      if (event.finished) {
        moveGreenBln();
      }
    });
  }

  //Purple
  const movePurpleBlnValue = useState(
    new Animated.ValueXY({
      x: Math.floor(Math.random() * (windowWidth - 100)),
      y: windowHeight + 100,
    })
  )[0];
  function movePurpleBln() {
    const animateDuration = Math.random() * 2000 + 3000;
    const timeoutDuration = Math.random() * tdOffset;
    setTimeout(function () {
      //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
      Animated.timing(movePurpleBlnValue, {
        toValue: {
          x: Math.floor(Math.random() * (windowWidth - 100)),
          y: -200,
        },
        duration: animateDuration,
        useNativeDriver: false,
      }).start((event) => {
        if (event.finished) {
          defaultPurpleBln();
        }
      });
    }, timeoutDuration);
  }

  function defaultPurpleBln() {
    Animated.timing(movePurpleBlnValue, {
      toValue: {
        x: Math.floor(Math.random() * (windowWidth - 100)),
        y: windowHeight + 100,
      },
      duration: 1,
      useNativeDriver: false,
    }).start((event) => {
      if (event.finished) {
        movePurpleBln();
      }
    });
  }
  function startBln() {
    setTimeout(function () {
      moveBlueBln();
    }, 500);

    setTimeout(function () {
      moveYellowBln();
    }, 1000);

    setTimeout(function () {
      moveGreenBln();
    }, 1500);

    setTimeout(function () {
      movePurpleBln();
    }, 2000);
  }
  rotateElephant();
  moveRedBln();
  startBln();

  return (
    <Screen style={styles.container}>
      <View style={styles.timerContainer}>
        <AppText style={styles.timerTextAbove}>
          The screening will end in
        </AppText>
        <CountDown
          until={10}
          onFinish={() => {
            navigation.navigate("Result", {
              result,
            });
            // console.log("hahaha");
          }}
          size={40}
          style={{
            marginTop: 5,
          }}
          digitStyle={{
            backgroundColor: "#FFFFFF00",
          }}
          digitTxtStyle={{ color: colors.tBlue }}
          timeToShow={["S"]}
          timeLabels={{ s: null }}
        />
        <AppText style={styles.timerTextBelow}>seconds.</AppText>
      </View>
      <Animated.Image
        style={[styles.balloons, moveRedBlnValue.getLayout()]}
        source={require("../../assets/balloonR.png")}
      ></Animated.Image>
      <Animated.Image
        style={[styles.balloons, moveBlueBlnValue.getLayout()]}
        source={require("../../assets/balloonB.png")}
      ></Animated.Image>
      <Animated.Image
        style={[styles.balloons, moveYellowBlnValue.getLayout()]}
        source={require("../../assets/balloonY.png")}
      ></Animated.Image>
      <Animated.Image
        style={[styles.balloons, moveGreenBlnValue.getLayout()]}
        source={require("../../assets/balloonG.png")}
      ></Animated.Image>
      <Animated.Image
        style={[styles.balloons, movePurpleBlnValue.getLayout()]}
        source={require("../../assets/balloonP.png")}
      ></Animated.Image>
      <Animated.Image
        style={[styles.elephant, { transform: [{ rotate: spin }] }]}
        source={require("../../assets/elephant.png")}
      ></Animated.Image>
    </Screen>
  );
}

const styles = StyleSheet.create({
  ball: {
    backgroundColor: "red",
    borderRadius: 50,
    height: 100,
    width: 100,
  },
  balloons: {
    height: 100,
    width: 100,
    position: "absolute",
    resizeMode: "contain",
    zIndex: 2,
  },
  ballAnimation: {
    position: "absolute",
  },
  container: { flex: 1 },
  elephant: {
    alignSelf: "center",
    bottom: 20,
    height: 200,
    width: 200,
    position: "absolute",
    resizeMode: "contain",
  },

  timerContainer: {
    // backgroundColor: "red",
    alignSelf: "center",
    position: "absolute",
    top: 90,
  },
  timerTextAbove: {
    alignSelf: "center",
    fontWeight: "bold",
  },
  timerTextBelow: {
    alignSelf: "center",
    fontWeight: "bold",
    marginTop: 5,
  },
});

export default ScreeningActual;
