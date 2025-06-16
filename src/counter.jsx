import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { View, Text, Button, StyleSheet } from 'react-native';
import { increment ,decrement,reset} from './redux/counterActions';

const Counter = () => {
//   const count = useSelector(state => state.count);
  const incrementValue = useSelector(state => state.increment.value);
  const decrementValue = useSelector(state => state.decrement.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Increment Value: {incrementValue}</Text>
      <Text style={styles.text}>Decrement Value: {decrementValue}</Text>
  <Button title="Reset" onPress={() => dispatch(reset())} />
      <Button title="Increment by 5" onPress={() => dispatch(increment(5))} />
      <Button title="Decrement by 3" onPress={() => dispatch(decrement(3))} />
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 24,
    marginBottom: 20
  }
});
