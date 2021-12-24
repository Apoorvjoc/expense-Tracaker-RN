import { PieChart } from "react-native-chart-kit";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const data = [
  {
    name: "Income",
    amount: 5000,
    color: "rgba(131, 167, 234, 1)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Expense",
    amount: 2800,
    color: "#F00",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
];

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const Add = () => {
  return (
    <View style={styles.container}>
      <PieChart
        data={data}
        width={screenWidth}
        height={250}
        chartConfig={chartConfig}
        accessor={"amount"}
        backgroundColor={"transparent"}
        paddingLeft={"15"}
        center={[5, 20]}
        absolute
      />
    </View>
  );
};

export default Add;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignContent: "center",
    flex: 1,
  },
});
