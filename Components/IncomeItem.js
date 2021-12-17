import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const IncomeItem = (props) => {
    return (
      <View style={styles.listItem}>
        <Text>
          {props.data.desc}
          {props.data.amt}
        </Text>
      </View>
    );
}

export default IncomeItem

const styles = StyleSheet.create({})
