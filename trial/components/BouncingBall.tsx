import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

const BouncingBall = () => {
  const offSetY = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: offSetY.value }],
  }));

  useEffect(() => {
    offSetY.value = withRepeat(withTiming(200), -1, true);
  }, []);
  return (
    <Animated.View style={[styles.ball, animatedStyles]}>
      {/* <Text>BouncingBall</Text> */}
    </Animated.View>
  );
};

export default BouncingBall;

const styles = StyleSheet.create({
  ball: {
    height: 50,
    width: 50,
    backgroundColor: "purple",
    borderRadius: 50,
  },
});
