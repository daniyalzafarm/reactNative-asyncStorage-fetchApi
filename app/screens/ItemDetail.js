import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import AppText from "../components/AppText";
function ItemDetail({ route, navigation }) {
  //Recieving Item
  const recievedItem = route.params?.sendingRecord;
  //   console.log(recievedItem);

  const userEndPoint = `http://jsonplaceholder.typicode.com/users/${recievedItem.userId}`;
  //   console.log(userEndPoint);

  const [user, setUser] = useState();

  //   const fetchData = async () => {
  //     fetch(userEndPoint)
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((jsonData) => {
  //         setUser(jsonData);
  //         console.log(jsonData);
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   };

  //   React.useEffect(() => {
  //     fetchData();
  //   }, []);

  useEffect(() => {
    (async () => {
      fetch(userEndPoint)
        .then((response) => {
          return response.json();
        })
        .then((jsonData) => {
          setUser(jsonData);
          //   console.log(user);
        })
        .catch((error) => {
          console.error(error);
        });
    })();
  }, []);
  const handlePressUsername = (user) => {
    navigation.navigate("UserDetails", { sendingRecord: user });
  };
  return (
    <View style={styles.container}>
      {user ? (
        <View>
          <AppText>Recieved Id : {recievedItem.id}</AppText>

          <AppText>Title : {recievedItem.title}</AppText>
          <AppText>
            Completion Status : {recievedItem.completed.toString()}
          </AppText>
          {/* <AppText>User ID : {recievedItem.userId}</AppText>
          <AppText>Username : {user.username}</AppText> */}
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => handlePressUsername(user)}
          >
            <AppText>User Name : {user.username}</AppText>
          </TouchableOpacity>
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
    padding: 50,
  },
});
export default ItemDetail;
