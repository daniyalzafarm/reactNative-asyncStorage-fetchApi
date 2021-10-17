import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet } from "react-native";

import AppText from "../components/AppText";
import AppButton from "../components/AppButton";

import AsyncStorage from "@react-native-async-storage/async-storage";

function AsynchronusStorage(props) {
  const saveData = async () => {
    console.log("Saving ...");
    await AsyncStorage.setItem(
      "@store:user",
      JSON.stringify({
        username: "Daniyal",
        password: "123456",
      })
    );
    // AsyncStorage.clear();
    console.log("Saving Done");
  };
  const loadData = async () => {
    console.log("Loading ...");

    // const keys = await AsyncStorage.getAllKeys();
    // console.log(keys);

    const item = await AsyncStorage.getItem("@store:user");
    console.log(JSON.parse(item).username);
    console.log("Loading Done");
  };
  return (
    <View style={styles.container}>
      <AppText>Async Storage Basics</AppText>
      <AppButton title="Save Data" onPress={saveData} />
      <AppButton title="Load Data" onPress={loadData} />
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
    paddingHorizontal: 50,
  },
});
export default AsynchronusStorage;
