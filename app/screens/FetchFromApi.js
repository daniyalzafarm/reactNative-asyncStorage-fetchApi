import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import AppText from "../components/AppText";
import AppButton from "../components/AppButton";

function FetchFromApi(props) {
  const [getData, setData] = useState();
  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        console.log(json);
      });
  };
  return (
    <View style={styles.container}>
      <AppText>Async Storage Basics</AppText>
      <AppButton title="Fetch Data From API" onPress={fetchData} />
      <AppText>Email : {getData != undefined ? getData.email : ""}</AppText>
      <AppText>
        City : {getData != undefined ? getData.address.city : ""}
      </AppText>
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
export default FetchFromApi;
