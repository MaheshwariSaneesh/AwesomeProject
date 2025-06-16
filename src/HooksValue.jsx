import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useCounter from './Hooks.jsx/useCounter'

const HooksValue = () => {
  const {count,increment}=  useCounter()
  return (
    <View>
        <Button title='Increment' onPress={increment}/>
      <Text>{count}</Text>
    </View>
  )
}

export default HooksValue

const styles = StyleSheet.create({})