import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import FirstAnimation from "./components/beginner/FirstAnimation";
import { Move } from "./components/beginner/AnimatedStyles$Props/Move";
import Circle from "./components/beginner/AnimatedStyles$Props/Circle";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <FirstAnimation /> */}
      {/* <Move /> useAnimated Styles */}
      <Circle/>
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
