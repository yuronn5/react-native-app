import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View, Image } from "react-native";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../constants/images";
import CustomButton from "../components/CustomButton";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#161622" }}>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
          }}
        >
          <Image
            source={images.logo}
            style={{ width: 130, height: 84 }}
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            style={{ width: 400, height: 200 }}
            resizeMode="contain"
          />
          <View style={{ position: "relative", marginTop: 5 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff" }}>
              Discover Endles Possibilities with
              <Text
                style={{ fontSize: 18, fontWeight: "bold", color: "#FFA001" }}
              >
                {" "}
                Aora
              </Text>
            </Text>
          </View>
          <Text style={{ fontSize: 16, color: "#fff" }}>
            Where creativity meets innovation: your gateway to endless
            possibilities.
          </Text>
          <CustomButton title="Get Started" handlePress={() => {router.push("/sign-in")}} containerStyles={{ marginTop: 20 }} />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
