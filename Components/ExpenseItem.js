import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Color from "../constant/Color";
// import TextColor from "../constants/TextColor";

const ExpenseItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.amt}>{props.data.amt}</Text>
      <Text style={{ ...styles.desc }}>{props.data.desc}</Text>
      {props.data.category === "expense" ? (
        <Text style={styles.exp}>Expense</Text>
      ) : (
        <Text style={styles.inc}>Income</Text>
      )}
    </View>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    minWidth: "80%",
    borderRadius: 7,
    marginVertical: 5,
    alignItems: "center",
    backgroundColor: Color.primary,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 10,
    // borderWidth: 10,
  },
  amt: {
    color: Color.black,
    fontWeight: "500",
    fontSize: 15,
    textAlign: "center",
    backgroundColor: Color.white,
    padding: 10,
    borderRadius: 10,
    fontWeight: "600",
    elevation: 5,
    width: "20%",
  },
  desc: {
    elevation: 5,
    color: Color.black,
    fontWeight: "500",
    fontSize: 15,
    textAlign: "center",
    backgroundColor: Color.white,
    padding: 10,
    borderRadius: 10,
    fontWeight: "600",
    width: "50%",
  },
  exp: {
    elevation: 5,
    color: "red",
    fontWeight: "500",
    fontSize: 15,
    textAlign: "center",
    backgroundColor: Color.white,
    padding: 10,
    borderRadius: 10,
    fontWeight: "600",
    width: "21%",
  },
  inc: {
    elevation: 5,
    color: "green",
    fontWeight: "500",
    fontSize: 15,
    textAlign: "center",
    backgroundColor: Color.white,
    padding: 10,
    borderRadius: 10,
    fontWeight: "600",
    width: "21%",
  },
});
