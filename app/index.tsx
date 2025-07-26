import CalculatorBottom from "@/components/CalculatorBottom";
import ThemeText from "@/components/ThemeText";
import { Colors } from "@/constants/Colors";
import { globalStyles } from "@/styles/global-styles";
import React from "react";
import { View } from "react-native";

const Calculator = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
        <ThemeText variant="h1">50 x 50</ThemeText>
        <ThemeText variant="h2">250</ThemeText>
      </View>

      {/* Filas de Botones¨*/}

      <View style={globalStyles.row}>
        <CalculatorBottom label="C" onPress={() => console.log("HOLA CLIK")} blackText color={Colors.lightGray} />
        <CalculatorBottom label="+/-" onPress={() => console.log("HOLA CLIK")} blackText color={Colors.lightGray} />
        <CalculatorBottom label="del" onPress={() => console.log("HOLA CLIK")} blackText color={Colors.lightGray} />
        <CalculatorBottom label="/" onPress={() => console.log("HOLA CLIK")}  color={Colors.orange} />
      </View>

        {/*Segunda Filas de Botones¨*/}

      <View style={globalStyles.row}>
        <CalculatorBottom label="1" onPress={() => console.log("HOLA CLIK")}   />
        <CalculatorBottom label="2" onPress={() => console.log("HOLA CLIK")}   />
        <CalculatorBottom label="3" onPress={() => console.log("HOLA CLIK")}   />
        <CalculatorBottom label="*" onPress={() => console.log("HOLA CLIK")}  color={Colors.orange} />
      </View>

       {/*Tercera Filas de Botones¨*/}

      <View style={globalStyles.row}>
        <CalculatorBottom label="4" onPress={() => console.log("HOLA CLIK")}   />
        <CalculatorBottom label="5" onPress={() => console.log("HOLA CLIK")}   />
        <CalculatorBottom label="6" onPress={() => console.log("HOLA CLIK")}   />
        <CalculatorBottom label="+" onPress={() => console.log("HOLA CLIK")}  color={Colors.orange} />
      </View>


       {/*Cuarta Filas de Botones¨*/}

      <View style={globalStyles.row}>
        <CalculatorBottom label="7" onPress={() => console.log("HOLA CLIK")}   />
        <CalculatorBottom label="8" onPress={() => console.log("HOLA CLIK")}   />
        <CalculatorBottom label="9" onPress={() => console.log("HOLA CLIK")}   />
        <CalculatorBottom label="-" onPress={() => console.log("HOLA CLIK")}  color={Colors.orange} />
      </View>

       {/*Cuarta Filas de Botones¨*/}

      <View style={globalStyles.row}>
        <CalculatorBottom label="0"  doubleSize onPress={() => console.log("HOLA CLIK")}   />
        <CalculatorBottom label="." onPress={() => console.log("HOLA CLIK")}   />
      
        <CalculatorBottom label="="  onPress={() => console.log("HOLA CLIK")}  color={Colors.orange} />
      </View>


    </View>
  );
};

export default Calculator;
