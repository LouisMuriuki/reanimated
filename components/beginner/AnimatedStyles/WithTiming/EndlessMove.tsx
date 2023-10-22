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
  const duration = 2000;
  const linearValue = useSharedValue(200);
  const defaultValue = useSharedValue(200);

  const animatedLinear = useAnimatedStyle(() => ({
    transform: [{ translateX: linearValue.value }],
  }));
  const animatedDefault = useAnimatedStyle(() => ({
    transform: [{ translateX: defaultValue.value }],
  }));

  useEffect(() => {
    linearValue.value = withRepeat(
      withTiming(-linearValue.value, { duration, easing: Easing.cubic }),
      -1,
      true
    );
    defaultValue.value = withRepeat(
      withTiming(-defaultValue.value, { duration }),
      -1,
      true
    );
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedLinear]}>
        <Text style={styles.text}>Default</Text>
      </Animated.View>
      <Animated.View style={[styles.box, animatedDefault]}>
        <Text style={styles.text}>Heavy</Text>
      </Animated.View>
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
  box: {
    height: 80,
    width: 80,
    margin: 20,
    borderWidth: 1,
    borderColor: "#b58df1",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#b58df1",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
