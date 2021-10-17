import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListOfItems from "./ListOfItems";
import ItemDetail from "./ItemDetail";
import UserDetail from "./UserDetail";

const Stack = createStackNavigator();
const ListingNavigator = () => (
  <Stack.Navigator
    initialRouteName="Listing"
    //Options for All Screens
    screenOptions={{
      headerStyle: { backgroundColor: "dodgerblue" },
      headerTintColor: "white",
    }}
  >
    <Stack.Screen
      name="Listing"
      component={ListOfItems}
      options={{
        title: "Listing Items",
      }}
    />
    <Stack.Screen
      name="Details"
      component={ItemDetail}
      options={{
        title: "Item Details",
      }}
    />
    <Stack.Screen
      name="UserDetails"
      component={UserDetail}
      options={{
        title: "User Details",
      }}
    />
  </Stack.Navigator>
);
export default ListingNavigator;
