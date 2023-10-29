import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import FirstAnimation from "./components/beginner/FirstAnimation";
import { Move } from "./components/beginner/AnimatedStyles/WithTiming/Move";
import Circle from "./components/beginner/AnimatedProps/withTiming/Circle";
import EndlessBounce from "./components/beginner/AnimatedStyles/WithTiming/EndlessBounce";
import Courasel from "./components/beginner/AnimatedStyles/withSpring/Courasel";
import DelayText from "./components/beginner/AnimatedStyles/withDelay/DelayText";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import TapGesture from "./components/beginner/Gestures/Tap";
import BouncingBall from "./trial/components/BouncingBall";
import SwipeDelete from "./trial/components/SwipeDelete";
import Progress from "./trial/components/Progress";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar style="auto" />
        {/* <FirstAnimation /> */}
        {/* <Move /> useAnimated Styles */}
        {/* <Circle/> */}
        {/* <EndlessBounce/> */}
        {/* <Courasel/> */}
        {/* <DelayText /> */}
        {/* <TapGesture/> */}
        {/* <BouncingBall/> */}
        {/* <SwipeDelete/>  */}
        <Progress/>
    </GestureHandlerRootView>
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
