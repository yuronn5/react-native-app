import React from "react";
import { Text, TouchableHighlight, StyleSheet } from "react-native";

export default function ListItem({ el, deleteHandler }) {
  return (
    <TouchableHighlight onPress={() => deleteHandler(el.key)}>
      <Text style={styles.text}>{el.text}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    lineHeight: 32,
    padding: 16,
    color: "#0a7ea4",
    borderBottomWidth: 1,
    borderBottomColor: "#0a7ea4",
    textAlign: "center",
  },
});
