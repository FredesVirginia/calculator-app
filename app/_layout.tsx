import { Colors } from "@/constants/Colors";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
const RootLayout = () => {

  const [loaded] = useFonts({
    SpaceMono : require("../assets/fonts/SpaceMono-Regular.ttf")
  })

  if(!loaded){
    return null
  }
  return (
    <View style={{ backgroundColor : Colors.background , flex:1}}>
      <Text>Header</Text>
        <Slot/>
       <StatusBar style="light"/>
    </View>
  );
};

export default RootLayout;
