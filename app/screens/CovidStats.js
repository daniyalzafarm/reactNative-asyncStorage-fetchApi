import React, { useState } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { useEffect } from "react/cjs/react.development";
import AppText from "../components/AppText";

function CovidStats(props) {
  const [totals, setTotals] = useState();
  useEffect(() => {
    // async () => {
    fetch("https://covid-19-data.p.rapidapi.com/totals", {
      method: "GET",
      headers: {
        "x-rapidapi-key": "8223c1b093msh35efd0a9effcf1bp19f5aejsnf1ff2c0f410e",
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setTotals(jsonData);
        console.log(jsonData);
      })
      .catch((err) => {
        console.error(err);
      });
    // };
  }, []);
  //   console.log(totals);
  return (
    <View style={styles.container}>
      {totals ? (
        <View>
          <AppText>Covid Stats</AppText>
          <AppText>Confirmed Cases : {totals[0].confirmed}</AppText>
          <AppText>Recovered : {totals[0].recovered}</AppText>
          <AppText>Critical Cases : {totals[0].critical}</AppText>
          <AppText>Deaths : {totals[0].deaths}</AppText>
          <AppText>Last Update : {totals[0].lastUpdate}</AppText>
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
export default CovidStats;
