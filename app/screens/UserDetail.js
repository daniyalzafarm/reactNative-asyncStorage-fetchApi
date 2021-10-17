import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../components/AppText";

function UserDetail({ route }) {
  //Recieving User
  const recievedUser = route.params?.sendingRecord;
  //   console.log(recievedUser);
  return (
    <View style={styles.container}>
      <AppText>Basic Information</AppText>
      <AppText>--------------------------------</AppText>
      <AppText>Name : {recievedUser.name}</AppText>
      <AppText>Phone : {recievedUser.phone}</AppText>
      <AppText>Email : {recievedUser.email}</AppText>
      <AppText>Website : {recievedUser.website}</AppText>
      <AppText />
      <AppText>Company</AppText>
      <AppText>--------------------------------</AppText>
      <AppText>Name : {recievedUser.company.name}</AppText>
      <AppText>Catch Phrase : {recievedUser.company.catchPhrase}</AppText>
      <AppText />
      <AppText>Address</AppText>
      <AppText>--------------------------------</AppText>
      <AppText>Suite : {recievedUser.address.suite}</AppText>
      <AppText>Street : {recievedUser.address.street}</AppText>
      <AppText>Zip Code : {recievedUser.address.zipcode}</AppText>
      <AppText>City : {recievedUser.address.city}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
export default UserDetail;
