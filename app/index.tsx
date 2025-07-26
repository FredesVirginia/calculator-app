import CalculatorBottom from "@/components/CalculatorBottom";
import ThemeText from "@/components/ThemeText";
import { Colors } from "@/constants/Colors";
import { useCalculator } from "@/hook/useCalculator";
import { globalStyles } from "@/styles/global-styles";
import React from "react";
import { View } from "react-native";

const Calculator = () => {
    const {formula , buildNumber , prevNumber, clean , toggleSing , deleteLast , divideOperator , addOperator , multipleOperator , 
      restOperator, calculatorResult
    } = useCalculator()
  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
        <ThemeText variant="h1">{formula}</ThemeText>
        {formula == prevNumber ? (
           <ThemeText variant="h2"> </ThemeText>
        ) :  <ThemeText variant="h2">{prevNumber}</ThemeText>}
      </View>

      {/* Filas de Botones¨*/}

      <View style={globalStyles.row}>
        <CalculatorBottom label="C" onPress={ clean} blackText color={Colors.lightGray} />
        <CalculatorBottom label="+/-" onPress={toggleSing} blackText color={Colors.lightGray} />
        <CalculatorBottom label="del" onPress={deleteLast} blackText color={Colors.lightGray} />
        <CalculatorBottom label="/" onPress={divideOperator}  color={Colors.orange} />
      </View>

        {/*Segunda Filas de Botones¨*/}

      <View style={globalStyles.row}>
        <CalculatorBottom label="1" onPress={() => buildNumber("1")}   />
        <CalculatorBottom label="2" onPress={() => buildNumber("2")}   />
        <CalculatorBottom label="3" onPress={() => buildNumber("3")}   />
        <CalculatorBottom label="*" onPress={multipleOperator}  color={Colors.orange} />
      </View>

       {/*Tercera Filas de Botones¨*/}

      <View style={globalStyles.row}>
        <CalculatorBottom label="4" onPress={() => buildNumber("4")}   />
        <CalculatorBottom label="5" onPress={() => buildNumber("5")}   />
        <CalculatorBottom label="6" onPress={() => buildNumber("6")}   />
        <CalculatorBottom label="+" onPress={addOperator}  color={Colors.orange} />
      </View>


       {/*Cuarta Filas de Botones¨*/}

      <View style={globalStyles.row}>
        <CalculatorBottom label="7" onPress={() => buildNumber("7")}   />
        <CalculatorBottom label="8" onPress={() => buildNumber("8")}   />
        <CalculatorBottom label="9" onPress={() => buildNumber("9")}   />
        <CalculatorBottom label="-" onPress={restOperator}  color={Colors.orange} />
      </View>

       {/*Cuarta Filas de Botones¨*/}

      <View style={globalStyles.row}>
        <CalculatorBottom label="0"  doubleSize onPress={() => buildNumber("0")}   />
        <CalculatorBottom label="." onPress={() => buildNumber(".")}   />
      
        <CalculatorBottom label="="  onPress={calculatorResult}  color={Colors.orange} />
      </View>


    </View>
  );
};

export default Calculator;
