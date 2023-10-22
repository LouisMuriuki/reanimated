import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import FirstAnimation from "./components/beginner/FirstAnimation";
import { Move } from "./components/beginner/AnimatedStyles/WithTiming/Move";
import Circle from "./components/beginner/AnimatedProps/withTiming/Circle";
import EndlessBounce from "./components/beginner/AnimatedStyles/WithTiming/EndlessBounce";
import Courasel from "./components/beginner/AnimatedStyles/withSpring/Courasel";
import DelayText from "./components/beginner/AnimatedStyles/withDelay/DelayText";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <FirstAnimation /> */}
      {/* <Move /> useAnimated Styles */}
      {/* <Circle/> */}
      {/* <EndlessBounce/> */}
      {/* <Courasel/> */}
      <DelayText />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
