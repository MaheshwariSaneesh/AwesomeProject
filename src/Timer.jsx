import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId); 
  }, [isRunning]);

  const handleClear = () => {
    setIsRunning(false);   // pause timer
    setSeconds(0);         // reset time
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{seconds}s</Text>

      <View style={styles.buttonContainer}>
        <Button title="Start" onPress={() => setIsRunning(true)} />
        <Button title="Pause" onPress={() => setIsRunning(false)} />
        <Button title="Clear" onPress={handleClear} />
      </View>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  timerText: {
    fontSize: 48,
    marginBottom: 30
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'space-around',
    width: '80%',
  }
});
