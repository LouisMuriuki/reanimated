import { View, Text, Button } from "react-native";
import React from "react";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";

const FirstAnimation = () => {
  const width = useSharedValue(50);

  const pressMe = () => {
    width.value = withSpring(width.value + 15);
  };
  return (
    <>
      <Animated.View
        style={{
          backgroundColor: "purple",
          width:50,
          marginRight:width,
          height: 50,
          marginBottom: 50,
          borderRadius: 30,
        }}
      />
      <Button title="Click Here" onPress={pressMe} />
    </>
  );
};

export default FirstAnimation;
