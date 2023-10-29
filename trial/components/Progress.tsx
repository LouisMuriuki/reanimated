import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React, { useEffect } from "react";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

const Progress = () => {
  const { width, height } = useWindowDimensions();
  const widthBoost = useSharedValue(0);

  useEffect(() => {
    widthBoost.value = withTiming(width - 40, {
      duration: 15000,
      //   easing: Easing.inOut(Easing.quad),
    });
  }, []);

  const animatedStyles = useAnimatedStyle(() => ({
    width: widthBoost.value,
  }));

  return (
    <View style={styles.Container}>
      <View style={styles.outerContainer}>
        <Animated.View
          style={[styles.progressbar, animatedStyles]}
        ></Animated.View>
      </View>
    </View>
  );
};

export default Progress;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginTop: 100,
    marginHorizontal: 20,
  },
  outerContainer: {
    position: "relative",
    width: "100%",
    height: 30,
    borderRadius: 10,
    borderColor: "red",
    borderWidth: 1,
  },
  progressbar: {
    position: "absolute",
    top:0,
    left:0,
    height: 30,
    borderRadius: 8,
    backgroundColor: "red",
    borderColor: "red",
    borderWidth: 1,
  },
});
