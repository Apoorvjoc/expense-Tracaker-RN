import React , {useState , useEffect} from 'react';
import { StyleSheet, Text, View, Button, TextInput , ScrollView  , FlatList} from "react-native";
import ExpenseItem from './components/ExpenseItem';
import IncomeItem from './Components/IncomeItem';

export default function App() {
  const [exp, setExp] = useState();
  const [inc, setInc] = useState();
  const [amount, setAmount] = useState();
  const [enteredDescription, setEnteredDescription] = useState("");
  const [storeExpense, setStoreExpense] = useState([]);
  const [storeIncome, setStoreIncome] = useState([]);

  const handleDescription = (inputedText) => {
    setEnteredDescription(inputedText);
  };

  const handleAmount = (inputedAmount) => {
    setAmount(inputedAmount);
  };

  const handleExpense = () => {
    console.log("Expense clicked!");
    setStoreExpense((currentState) => [
      ...currentState ,
      { desc : enteredDescription, amt: amount }
    ]);
  };
  const handleIncome = () => {
    console.log("Income clicked!");
    setStoreIncome((currentState) => [
      ...currentState,
      { desc:enteredDescription, amt: amount },
    ]);
  };

  useEffect(() => {
      let currExp = 0 , currInc = 0;
      storeExpense.forEach((obj)=>{
        currExp = Number(currExp) + Number(obj.amt);
      })
      setExp(currExp);
      storeIncome.forEach((obj)=>{
        currInc = Number(currInc) + Number(obj.amt)
      })
      setInc(currInc);
  })

  return (
    <View style={styles.container}>
      <Text>-----------EXPENSE TRACKER------------</Text>
      <View style={styles.inputContainer}>
        <Text>Total Income:{inc - exp} </Text>
        <Text>Total Expendature:{exp} </Text>
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
        <Button title="Expense" onPress={handleExpense} />
        <Button title="Income" onPress={handleIncome} />
      </View>

      <Text>.......EXPENSE....</Text>
      <FlatList
        keyExtractor={(item, index) => index}
        data={storeExpense}
        renderItem={(itemData) => <ExpenseItem data={itemData.item}/>}
      />

      <Text>.......Income....</Text>
      <FlatList
        keyExtractor={(item, index) => index}
        data={storeIncome}
        renderItem={(itemData) => <IncomeItem data={itemData.item} /> }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
