import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ExpenseItem from "./Components/ExpenseItem.js";
import IncomeItem from "./Components/IncomeItem";
import Input from "./Components/Input.js";
import Header from "./Components/Header.js";
import Color from "./constant/Color.js";
import Footer from "./Components/Footer.js";
// import TextColor from "./constants/TextColor.js";

export default function App() {
  const [exp, setExp] = useState();
  const [inc, setInc] = useState();
  const [storeExpense, setStoreExpense] = useState([]);
  const [storeIncome, setStoreIncome] = useState([]);

  const handleExpense = (amount, enteredDescription) => {
    console.log("Expense clicked!");
    setStoreExpense((currentState) => [
      ...currentState,
      { desc: enteredDescription, amt: amount },
    ]);
  };
  const handleIncome = (amount, enteredDescription) => {
    console.log("Income clicked!");
    setStoreIncome((currentState) => [
      ...currentState,
      { desc: enteredDescription, amt: amount },
    ]);
    // setAmount("");
  };

  useEffect(() => {
    let currExp = 0,
      currInc = 0;
    storeExpense.forEach((obj) => {
      currExp = Number(currExp) + Number(obj.amt);
    });
    setExp(currExp);
    storeIncome.forEach((obj) => {
      currInc = Number(currInc) + Number(obj.amt);
    });
    setInc(currInc);
  });

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.textContainer}>
        <View style={styles.incomeContainer}>
          <Text style={styles.amountText}>Amount Left:</Text>
          <Text
            style={{
              fontWeight: "bold",
              color: Color.black,
              backgroundColor: Color.white,
              width: "25%",
              fontSize: 25,
              textAlign: "center",
              borderRadius: 10,
              marginLeft: -20,
            }}
          >
            {inc - exp}
          </Text>
        </View>
        <View style={styles.expenseContainer}>
          <Text style={styles.expenditureText}>Expenses:</Text>
          <Text
            style={{
              fontWeight: "bold",
              color: Color.black,
              backgroundColor: Color.white,
              width: "25%",
              textAlign: "center",
              fontSize: 25,
              borderRadius: 10,
            }}
          >
            {exp}
          </Text>
        </View>
      </View>

      <Input funcAsPropsExp={handleExpense} funcAsPropsInc={handleIncome} />

      <View style={styles.listContainer}>
        <View style={styles.expenseListContainer}>
          <Text style={styles.expenseListText}>EXPENSE</Text>
          <FlatList
            keyExtractor={(item, index) => index}
            data={storeExpense}
            renderItem={(itemData) => <ExpenseItem data={itemData.item} />}
          />
        </View>

        <View style={styles.incomeListContainer}>
          <Text style={styles.incomeText}>INCOME</Text>
          <FlatList
            keyExtractor={(item, index) => index}
            data={storeIncome}
            renderItem={(itemData) => <IncomeItem data={itemData.item} />}
          />
        </View>
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.background,
  },
  textContainer: {
    width: "100%",
    justifyContent: "space-between",
  },
  incomeContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
  },
  expenseContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  amountText: {
    fontSize: 20,
    textAlign: "center",
    color: Color.yellow,
    fontWeight: "bold",
  },
  expenditureText: {
    fontSize: 20,
    textAlign: "center",
    color: Color.header,
    fontWeight: "bold",
  },

  listContainer: {
    flex: 3,
    flexDirection: "row",
    width: "98%",
    justifyContent: "space-around",
    // borderWidth: 3,
    marginVertical: 10,
    // backgroundColor: "white",
    // borderRadius: 8,
  },
});
