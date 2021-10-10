import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'learn clojure', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the snes', key: '3' }
  ]);

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.content}>
        {/* user input */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({item}) => (
              <Text>{item.text}</Text>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }
});
