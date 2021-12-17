import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

const Input = (props) => {
  const [amount, setAmount] = useState();
  const [enteredDescription, setEnteredDescription] = useState("");

  const handleDescription = (inputedText) => {
    setEnteredDescription(inputedText);
  };

  const handleAmount = (inputedAmount) => {
    setAmount(inputedAmount);
  };

  return (
    <View style={styles.inputContainer}>
      <View style={styles.input}>
        <View style={styles.amountContainer}>
          <TextInput
            placeholder="Enter Amount"
            value={amount}
            onChangeText={handleAmount}
            keyboardType="numeric"
            style={styles.amount}
          />
        </View>
        <TextInput
          placeholder="Enter Description"
          value={enteredDescription}
          onChangeText={handleDescription}
          style={styles.description}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Expense"
          onPress={() => props.funcAsPropsExp(amount, enteredDescription)}
          style={styles.expense}
        />
        <Button
          title="Income"
          onPress={() => props.funcAsPropsInc(amount, enteredDescription)}
          style={styles.income}
        />
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    width: "70%",
  },
  amount: {
    marginTop: 15,
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    borderWidth: 1,
    width: "40%",
    textAlign: "center",
  },
  amountContainer: {
    alignItems: "center",
  },
  description: {
    marginVertical: 10,
    marginBottom: 10,
    borderBottomWidth: 2,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  expense: {},
  income: {
    marginLeft: 10,
  },
});
