import {
  View,
  StyleSheet,
  Button,
  Image,
  FlatList,
  ImageProps,
} from "react-native";
import React, { useEffect, useState } from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
interface cardsProps {
  image: string;
  id: number;
}

const cards: cardsProps[] = [
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
  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);
  const offsetShake = useSharedValue(0);
  const [gamestarted, setGameStarted] = useState(false);
  useEffect(() => {
    text1Opacity.value = withDelay(1 * delay, withTiming(1, { duration }));
    text2Opacity.value = withDelay(2 * delay, withTiming(1, { duration }));
  }, []);

  const Start = () => {
    shake();
    setGameStarted(true);
    offsetX.value = withSpring(0);
    offsetY.value = withSpring(0);
  };
  const dragggableCards = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offsetX.value }, { translateY: offsetY.value }],
    };
  });

  const pan = Gesture.Pan()
    .onBegin(() => {})
    .onChange((event) => {
      offsetX.value = event.translationX;
      offsetY.value = event.translationY;
    })
    .onFinalize(() => {});

  const animatedStyles = useAnimatedStyle(() => {
    const rotateValue = interpolate(rotate.value, [0, 1], [180, 360]);
    return {
      transform: [{ rotateX: withTiming(`${10}deg`, { duration: 1000 }) }],
    };
  });

  const shake = () => {
    const TIME = 100;
    const EASING = Easing.elastic(1.5);
    offsetShake.value = withRepeat(
      withSequence(
        withTiming(-2, {
          duration: TIME,
          easing: EASING,
        }),
        withTiming(-0, {
          duration: TIME,
          easing: EASING,
        }),
        withTiming(2, {
          duration: TIME,
          easing: EASING,
        })
      ),
      20,
      false
    );
  };

  const shakingstyles = useAnimatedStyle(() => {
    return {
      transform: [{ rotateZ: `${offsetShake.value}deg` }],
    };
  });
  const renderItem = ({
    item,
    index,
  }: {
    item: { image: any; id: number };
    index: number;
  }) => {
    console.log(item);
    return (
      <GestureDetector gesture={pan}>
        <Animated.Image
          key={index}
          source={item.image}
          style={[
            styles.card,
            animatedStyles,
            !gamestarted && dragggableCards,
            shakingstyles,
          ]}
        />
      </GestureDetector>
    );
  };

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

        <FlatList
          data={cards}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
          contentContainerStyle={{
            flex: 1,
            bottom: -100,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            zIndex: 10000,
          }}
        />
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
    marginTop: 100,
  },
  welcomeText: {
    fontSize: 24,
  },
  button: {
    marginBottom: 20,
    marginHorizontal: 20,
  },
  cardsSection: {
    marginHorizontal: 10,
    //  flex: 1
  },

  card: {
    resizeMode: "contain",
    width: 200,
    height: 150,
  },
});
