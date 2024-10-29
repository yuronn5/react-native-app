import { Text, View, Button, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const HandleClick1 = () => {
    Alert.alert("Yuronn", "Hello, world!", [
      { text: "OK" , onPress: () => console.log("OK Pressed")},
      { text: "Cancel", onPress: () => console.log("Cancel Pressed"), style: "cancel" },
    ]);
  };
  const HandleClick2 = () => {
    Alert.prompt("Yuronn", "Hello, world!", [
      { text: "OK" , onPress: () => console.log("OK Pressed")},
      { text: "Cancel", onPress: () => console.log("Cancel Pressed"), style: "cancel" },
    ]);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "yellow",
      }}
    >
      <Text>Default text</Text>
      <Button title={"Press me1"} onPress={() => HandleClick1()} color={"red"} />
      <Button title={"Press me2"} onPress={() => HandleClick2()} color={"red"} />
    </SafeAreaView>
  );
}
