import { View, Button, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export function Move() {
  const translateX = useSharedValue(0);

  const handlePress = () => {
    translateX.value = translateX.value + 50;
  };

  const animatedstyles = useAnimatedStyle(() => ({
    transform: [{ translateX: withSpring(translateX.value * 2) }],
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedstyles]} />
      <Button onPress={handlePress} title="Click me" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    height: 120,
    width: 120,
    backgroundColor: "#b58df1",
    borderRadius: 20,
    marginVertical: 50,
  },
});
