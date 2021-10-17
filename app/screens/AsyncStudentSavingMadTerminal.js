import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

function AsyncStudentSavingMadTerminal(props) {
  const [regNo, SetRegNo] = useState();
  const [name, SetName] = useState();

  const [regNoSave, SetRegNoSave] = useState();
  const [nameSave, SetNameSave] = useState();

  const [read, SetRead] = useState(false);
  const [save, SetSave] = useState(false);
  const [deleteData, SetDeleteData] = useState(false);

  const saveToPersistent = async () => {
    console.log("Saving ...");
    await AsyncStorage.setItem(
      "@store:user",
      JSON.stringify({
        registration: regNo,
        studentName: name,
      })
    );
    SetRegNo("");
    SetName("");
    SetSave(true);
    SetDeleteData(false);
    SetRead(false);
    console.log("Saving Done");
  };
  const displayScreen = async () => {
    console.log("Loading ...");
    SetSave(false);
    const item = await AsyncStorage.getItem("@store:user");
    if (item) {
      SetRegNoSave(JSON.parse(item).registration);
      SetNameSave(JSON.parse(item).studentName);
      console.log(JSON.parse(item).registration);
      console.log(JSON.parse(item).studentName);
    } else {
      SetRegNoSave("Not Saved");
      SetNameSave("Not Saved");
    }
    SetRead(true);

    console.log("Loading Done");
  };
  const deleteFromPersistent = async () => {
    try {
      await AsyncStorage.removeItem("@store:user");
      SetRead(false);
      SetDeleteData(true);
      return true;
    } catch (exception) {
      return false;
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter Registration Number"
        placeholderTextColor="#696969"
        style={styles.textInput}
        onChangeText={(text) => SetRegNo(text)}
      />
      <TextInput
        placeholder="Enter Name"
        placeholderTextColor="#696969"
        style={styles.textInput}
        onChangeText={(text) => SetName(text)}
      />
      {save ? (
        <View style={styles.saveData}>
          <Text style={{ color: "green", fontWeight: "bold" }}>
            Data Saved Successfully !
          </Text>
        </View>
      ) : (
        <Text></Text>
      )}
      {deleteData ? (
        <View style={styles.saveData}>
          <Text style={{ color: "red", fontWeight: "bold" }}>
            Data Deleted Successfully !
          </Text>
        </View>
      ) : (
        <Text></Text>
      )}
      <TouchableOpacity style={styles.button} onPress={saveToPersistent}>
        <Text style={styles.text}>Save Data</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={displayScreen}>
        <Text style={styles.text}>Reads Data</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={deleteFromPersistent}>
        <Text style={styles.text}>Delete Data</Text>
      </TouchableOpacity>
      {read ? (
        <View style={styles.readData}>
          <Text>Name : {nameSave}</Text>
          <Text>Reg# : {regNoSave}</Text>
        </View>
      ) : (
        <Text></Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    width: "90%",
    height: 50,
    marginVertical: 10,
    alignSelf: "center",
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#696969",
    padding: 15,
  },
  button: {
    width: "90%",
    borderRadius: 15,
    backgroundColor: "#800000",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginVertical: 10,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  readData: {
    height: 100,
    width: "90%",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 15,
  },
  saveData: {
    // height: 100,
    width: "90%",
  },
});
export default AsyncStudentSavingMadTerminal;
