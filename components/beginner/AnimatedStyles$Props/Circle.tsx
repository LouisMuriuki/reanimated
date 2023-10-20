import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { Circle as SVgCircle, Svg } from "react-native-svg";
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
const Circle = () => {
  const AnimatedCircle = Animated.createAnimatedComponent(SVgCircle);
  const radius = useSharedValue(20);

  const handlePress = () => {
    radius.value += 10;
  };

  const animatedProps = useAnimatedProps(() => ({
    r: withTiming(radius.value),
  }));
  return (
    <>
      <Svg>
        <AnimatedCircle
          cx="50"
          cy="50"
          animatedProps={animatedProps}
          fill="blue"
        />
      </Svg>

      <Button onPress={handlePress} title="Click me" />
    </>
  );
};

export default Circle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  svg: {
    height: 250,
    width: "100%",
  },
});
