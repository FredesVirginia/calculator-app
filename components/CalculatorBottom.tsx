import { Colors } from "@/constants/Colors";
import { globalStyles } from "@/styles/global-styles";
import * as Haptics from 'expo-haptics';
import React from "react";
import { Pressable, Text } from "react-native";
interface Props {
  label: string;
  color?: string;
  doubleSize ? : boolean;
  blackText?: boolean;
  onPress: () => void;
}

const CalculatorBottom = ({ label, color = Colors.darkGray, onPress, blackText = false , doubleSize=false }: Props) => {
const handlePress = () => {
    Haptics.selectionAsync();
    onPress();
  };
  
  return (
    <Pressable style={({pressed})=> ({
        ...globalStyles.button,
        backgroundColor : color,
        opacity : pressed ? 0.8 : 1,
         width : doubleSize ? 180 : 80 
    })} 
    onPress={handlePress}>
      <Text 
      style={{...globalStyles.buttonText,
        color : blackText ? "black" : "white"
      }}
      
      >{label}</Text>
    </Pressable>
  );
};

export default CalculatorBottom;
