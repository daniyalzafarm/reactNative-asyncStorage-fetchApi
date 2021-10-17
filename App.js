import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import ListingNavigator from "./app/screens/ListingNavigator";
import CovidStats from "./app/screens/CovidStats";
import AsyncStudentSavingMadTerminal from "./app/screens/AsyncStudentSavingMadTerminal";
import FetchFromApi from "./app/screens/FetchFromApi";

export default function App() {
  return (
    // <CovidStats />

    <FetchFromApi />

    // <AsyncStudentSavingMadTerminal />

    // <NavigationContainer>
    //   <ListingNavigator />
    // </NavigationContainer>
  );
}
