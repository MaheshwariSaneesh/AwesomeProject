import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View, ActivityIndicator } from 'react-native';

const url = 'https://jsonplaceholder.typicode.com/todos'; // You can try 'http://' if needed

const FetchValue = () => {
  const [data, setData] = useState([]);


  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log('Fetched Data:', json);
      setData(json);
  
    } catch (err) {
      console.log('Fetch Error:', err.message);

    }
  };

  useEffect(() => {
    fetchData();
  }, []);



  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.itemText}>{item.title}</Text>
        )}
      />
       <Text style={styles.itemText}>{data.title}</Text>
    </View>
  );
};

export default FetchValue;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingHorizontal: 16,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 16,
    marginVertical: 6,
    borderBottomWidth: 0.5,
    paddingBottom: 4,
  },
});
