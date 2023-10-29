import { SafeAreaView, StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import {
  FlatList,
  Gesture,
  GestureDetector,
} from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
const tasks = [
  { id: 1, text: "Buy groceries" },
  { id: 2, text: "Walk the dog" },
  { id: 3, text: "Finish the report" },
  { id: 4, text: "Go to the gym" },
  { id: 5, text: "Call mom" },
  { id: 6, text: "Read a book" },
  { id: 7, text: "Plan a trip" },
  { id: 8, text: "Clean the house" },
  { id: 9, text: "Learn React Native" },
  { id: 10, text: "Write a blog post" },
];

// You can add or modify tasks as needed.

const SwipeDelete = () => {
  const offSetX = useSharedValue(0);
  const borderRadius = useSharedValue(0);
  const pressed = useSharedValue(false);
  const pan = Gesture.Pan()
    .onBegin(() => {
      borderRadius.value = 5;
      pressed.value = true;
    })
    .onChange((event) => {
      console.log(event.translationX);
      offSetX.value = event.translationX;
    })
    .onFinalize(() => {
      pressed.value = false;
    });

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: offSetX.value }],
    borderRadius: borderRadius.value,
  }));

  const onClick = ({ item, index }) => {
    console.log(item, index);
  };

  const renderItem = ({
    item,
    index,
  }: {
    item: { id: number; text: string };
    index: number;
  }) => {
     const isPanEnabled =  item.id === index + 1 
    return (
      <View key={index} style={styles.listItemContainer}>
        {/*         
        <View style={styles.listItem}>
          <View style={styles.listItemInner}>// // </View>
        
        </View> */}
        <GestureDetector gesture={pan}>
          <Animated.View
            style={[
              styles.listItemTop,
              item.id === index + 1 ? animatedStyles : null,
            ]}
          >
            <View style={styles.listItemInner}>
              <AntDesign name="delete" size={24} color="black" />
            </View>
          </Animated.View>
        </GestureDetector>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.List}>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => `${item.id}`}
        contentContainerStyle={{}}
      />
    </SafeAreaView>
  );
};

export default SwipeDelete;

const styles = StyleSheet.create({
  List: {
    flex: 1,
    marginTop: 100,
  },
  listItemContainer: {
    position: "relative",
  },
  listItem: {
    justifyContent: "center",
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#f4f5f6",
    backgroundColor: "white",
  },
  listItemInner: {
    alignItems: "flex-end",
    paddingRight: 20,
  },
  listItemTop: {
    width: "100%",
    top: 0,
    left: 0,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#f4f5f6",
    backgroundColor: "blue",
  },
});
