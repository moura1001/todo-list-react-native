import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function TodoItem({item}) {
  return (
    <Text style={styles.item}>{item.text}</Text>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10
  }
});