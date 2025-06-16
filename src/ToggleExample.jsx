import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ToggleExample = () => {
  const [value, setValue] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.statusText}>{value}</Text>
      <Button title="Toggle" onPress={() => setValue(value === 0 ? 1 : 0)} />
    </View>
  );
};

export default ToggleExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  statusText: {
    fontSize: 24,
    marginBottom: 20
  }
});
