import React ,{useState} from "react";
import { StyleSheet, View ,TextInput ,Button } from "react-native";

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
     
      <TextInput
        placeholder="Enter Amount"
        value={amount}
        onChangeText={handleAmount}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Enter Description"
        value={enteredDescription}
        onChangeText={handleDescription}
      />
      <Button
        title="Expense"
        onPress={() =>
          props.funcAsPropsExp(amount, enteredDescription)
        }
      />
      <Button
        title="Income"
        onPress={() =>
          props.funcAsPropsInc(amount, enteredDescription)
        }
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({});
