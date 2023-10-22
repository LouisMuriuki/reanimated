import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

const EndlessBounce = () => {
  const width = useSharedValue(80);
  const height = useSharedValue(80);
  const animatedBounce = useAnimatedStyle(() => ({
    width: width.value,
    height: height.value,
  }));

  useEffect(() => {
    width.value = withRepeat(
      withTiming(width.value + 20, { duration: 1000 }),
      -1,
      true
    );
    height.value = withRepeat(
      withTiming(height.value + 20, { duration: 1000 }),
      -1,
      true
    );
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.circle, animatedBounce]}>
        <Text style={styles.text}>Default</Text>
      </Animated.View>
      {/* <Animated.View style={[styles.box, animatedDefault]}>
        <Text style={styles.text}>Heavy</Text>
      </Animated.View> */}
    </View>
  );
};

export default EndlessBounce;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  circle: {
    height: 80,
    margin: 20,
    borderWidth: 1,
    borderColor: "#b58df1",
    borderRadius: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#b58df1",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
