import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState('');

  const changeHandler = (value) => {
    setText(value);
  }

  const addHandler = () => {
    submitHandler(text);
    setText('');
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder='new todo...'
        value={text}
        onChangeText={changeHandler}
      />
      <Button
        onPress={addHandler}
        title='add todo'
        color='coral'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  }
});