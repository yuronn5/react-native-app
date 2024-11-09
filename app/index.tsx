import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import {Link} from 'expo-router';

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>StickerSmash</Text>
      <StatusBar style="auto" />
      <Link href="/home" style={{color: 'blue'}}>Pro1file</Link>
    </View>
  );
}

