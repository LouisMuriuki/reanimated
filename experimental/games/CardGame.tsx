import { View, StyleSheet, Button, Image } from "react-native";
import React, { useEffect } from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
const cards = [
  {
    image: require("../../assets/CardGame/K.png"),
    id: 1,
  },
  {
    image: require("../../assets/CardGame/Q.png"),
    id: 2,
  },
  {
    image: require("../../assets/CardGame/J.png"),
    id: 3,
  },
];

const delay = 500;
const duration = 1500;
const CardGame = () => {
  const text1Opacity = useSharedValue(0);
  const text2Opacity = useSharedValue(0);
  const rotate = useSharedValue(0);

  useEffect(() => {
    text1Opacity.value = withDelay(1 * delay, withTiming(1, { duration }));
    text2Opacity.value = withDelay(2 * delay, withTiming(1, { duration }));
  }, []);

  const Start = () => {};
  const animatedStyles = useAnimatedStyle(() => {
    const rotateValue = interpolate(rotate.value, [0.1], [180, 360]);
    return {
      transform: [
        { rotateY: withTiming(`${rotateValue}deg`, { duration: 1000 }) },
      ],
    };
  });
  // const Start = () => {};
  return (
    <View style={styles.container}>
      <View style={styles.innercontainer}>
        <View style={styles.welcomeTextSection}>
          <Animated.Text
            style={[styles.welcomeText, { opacity: text1Opacity }]}
          >
            Welcome to Cards
          </Animated.Text>
          <Animated.Text
            style={[styles.welcomeText, { opacity: text2Opacity }]}
          >
            Hit start to begin
          </Animated.Text>
        </View>
        <View style={styles.cardsSection}>
          {cards.map((card, i) => {
            console.log(card);
            return (
              <Animated.Image
                key={i}
                source={card.image}
                style={[styles.card, animatedStyles]}
              />
            );
          })}
        </View>
      </View>
      <View style={styles.button}>
        <Button title="Start Game" onPress={Start} />
      </View>
    </View>
  );
};

export default CardGame;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#E1BEE7",
  },
  innercontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  welcomeTextSection: {
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginTop: -300,
  },
  welcomeText: {
    fontSize: 24,
  },
  button: {
    marginBottom: 20,
    marginHorizontal: 20,
  },
  cardsSection: {
    bottom: -350,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  card: {
    resizeMode: "contain",
    width: 200,
    height: 150,
  },
});
