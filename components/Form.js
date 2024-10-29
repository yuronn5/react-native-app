import React, { useState } from "react";
import { Text, TextInput, StyleSheet, Button, View } from "react-native";
// import  useState  from "react";

export default function Form({ addHandler }) {
  const [text, setText] = useState("");

  const onChange = (text) => setText(text);

  return (
    <View>
      <TextInput
        style={styles.textInput}
        onChangeText={onChange}
        placeholder="Enter your task"
      />
      <Button title="Add Task" onPress={() => addHandler(text)} />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 5,
    padding: 5,
    width: 300,
    alignSelf: "center",
  },
});
