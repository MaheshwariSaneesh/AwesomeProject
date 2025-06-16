import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
  const [parentDataList, setParentDataList] = useState([]);

  const handleChildData = (data) => {
    // if (data.trim() !== '') {
      setParentDataList(prevList => [...prevList, data]);
    // }
  };

  return (
    <View style={styles.container}>
      <Child sendDataToParent={handleChildData} />

      <Text style={styles.title}>Data from Child:</Text>
      <FlatList
        data={parentDataList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      />
    </View>
  );
};

export default Parent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  item: {
    fontSize: 18,
    paddingVertical: 5,
  },
});
