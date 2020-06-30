import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [number, setNumber] = useState(1);
  function test() {
    setNumber(number + 1);
    console.log(`現在の数字: ${number}`);
  }
  return (
    <View style={styles.container}>
      <Text>現在の数字: {number}</Text>
      <Button
        onPress={() => {
          test();
        }}
        title="ボタン"
      ></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
