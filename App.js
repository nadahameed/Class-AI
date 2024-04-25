// App.js is the entry point of our application.
import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ClassesScreen from "./screens/ClassesScreen/ClassesScreen.main";
import RosterScreen from "./screens/RosterScreen/RosterScreen.main";

/* TODO: 

  This app has three screens:
    (1) MovieListScreen
    (2) MovieDetailScreen
    (3) MovieFilterScreen

  Screens (1) and (2) are on the same navigation stack.
  Screen (3) is presented modally.

  This setup is identical to the setup in the React Navigation documentation.
  Read the example carefully to set up this app's screen heirarchy in a similar manner.

  https://reactnavigation.org/docs/modal */
export default function App() {
  const Stack = createStackNavigator();
  return <NavigationContainer>{
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="ClassesScreen" component={ClassesScreen} />
        <Stack.Screen name="RosterScreen" component={RosterScreen} />
      </Stack.Group>
    </Stack.Navigator>
    }</NavigationContainer>;
}
