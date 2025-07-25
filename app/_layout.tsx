import { Slot } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
const RootLayout = () => {
  return (
    <View>
      <Text>Header</Text>
        <Slot/>
        <Text>Footer</Text>
    </View>
  );
};

export default RootLayout;
