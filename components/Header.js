import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Tasks list</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingTop: 60,
    height: 100,
    backgroundColor: "#0a7ea4",
  },

  text: {
    color: "red",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});
