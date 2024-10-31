import {
  Text,
  View,
  Button,
  Alert,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { gStyle } from "../styles/style";
import * as Font from "expo-font";
import { useState, useEffect } from "react";


export default function Main() {
  return (
    <View style={gStyle.main}>
      <Text style={gStyle.text}>Main page</Text>
    </View>
  );
}
