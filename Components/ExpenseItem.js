import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ExpenseItem = (props) => {
    return (

      <View style={styles.listItem}>
        <Text>
        {/*console.log(props)*/}
          {props.data.desc}
          {props.data.amt}
        </Text>
      </View>
    );
}

export default ExpenseItem

const styles = StyleSheet.create({})
