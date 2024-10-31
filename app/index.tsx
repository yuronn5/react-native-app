import { Text, View, Button, Alert, FlatList, ActivityIndicator } from "react-native";
import { gStyle } from "../styles/style";
import * as Font from "expo-font";
import { useState, useEffect } from "react";

import Main  from "../components/Main";

const loadFonts = async () => {
  await Font.loadAsync({
    "mt-bold": require("../fonts/Montserrat-Bold.ttf"),
    "mt-light": require("../fonts/Montserrat-Light.ttf"),
  });
};

export default function Index() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    loadFonts()
      .then(() => setFontLoaded(true))
      .catch((error) => console.warn("Error loading fonts", error));
  }, []);

  if (!fontLoaded) {
    return (
      <View style={gStyle.main}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <Main/>
  );
}
