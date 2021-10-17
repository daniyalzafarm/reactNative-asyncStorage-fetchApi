import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";

function ListOfItems({ navigation }) {
  const [getData, setData] = useState();

  const fetchData = async () => {
    fetch("http://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const handlePressItem = (user) => {
    navigation.navigate("Details", { sendingRecord: user });
  };
  return (
    <View>
      {getData ? (
        <View style={styles.container}>
          <StatusBar style="auto" />
          <AppText style={styles.heading}>List of Items</AppText>
          <FlatList
            data={getData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => handlePressItem(item)}
              >
                <View style={styles.listItem}>
                  <AppText>{item.title}</AppText>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      ) : (
        <View>
          <ActivityIndicator color="dodgerblue" size="large" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 50,
  },
  heading: {
    fontSize: 35,
    fontWeight: "bold",
  },
  listItem: {
    padding: 20,
    justifyContent: "center",
    backgroundColor: colors.light,
    borderBottomWidth: 1,
    borderBottomColor: colors.medium,
  },
});
export default ListOfItems;
