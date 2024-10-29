import { Text, View, Button, Alert, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import ListItem from "../components/ListItem";
import Form from "../components/Form";
import { useState } from "react";

export default function Index() {
  const [listOfItems, setListOfItems] = useState([
    { text: "Item 1", key: "1" },
    { text: "Item 2", key: "2" },
    { text: "Item 3", key: "3" },
    { text: "Item 4", key: "4" },
  ]);

  const addHandler = (text) => {
    setListOfItems((list) => {
      return [{ text, key: Math.random().toString() }, ...list];
    });
  };

  const deleteHandler = (key) => {
    setListOfItems((list) => {
      return list.filter((el) => el.key != key);
    });
  };

  return (
    <View>
      <Header />
      <Form addHandler={addHandler} />
      <View>
        <FlatList
          data={listOfItems}
          renderItem={({ item }) => (
            <ListItem el={item} deleteHandler={deleteHandler} />
          )}
        />
      </View>
    </View>
  );
}
