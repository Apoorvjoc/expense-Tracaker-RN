import React , {useState , useEffect} from 'react';
import { StyleSheet, Text, View , FlatList} from "react-native";
import ExpenseItem from './Components/ExpenseItem';
import IncomeItem from './Components/IncomeItem';
import Input from './Components/Input';

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
  };
  
   useEffect(() => {
      
    let currExp = 0,currInc = 0;
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
      <Text>-----------EXPENSE TRACKER------------</Text>
      
        <View>
          <Text>Amount Left :{inc - exp} </Text>
          <Text>Total Expendature:{exp} </Text>
        </View>

      <Input funcAsPropsExp={handleExpense} funcAsPropsInc={handleIncome} />

      <Text>.......EXPENSE....</Text>
      <FlatList
        keyExtractor={(item, index) => index}
        data={storeExpense}
        renderItem={(itemData) => <ExpenseItem data={itemData.item} />}
      />

      <Text>.......Income....</Text>
      <FlatList
        keyExtractor={(item, index) => index}
        data={storeIncome}
        renderItem={(itemData) => <IncomeItem data={itemData.item} />}
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
