// App.js is the entry point of our application.
import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ClassesScreen from "./screens/ClassesScreen/ClassesScreen.main";
import RosterScreen from "./screens/RosterScreen/RosterScreen.main";
import CameraScreen from "./screens/CameraScreen/CameraScreen.main";
import AddStudentScreen from "./screens/AddStudentScreen/AddStudentScreen.main";


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
  const Tab = createBottomTabNavigator();

  function MainTabNavigator() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Classes" component={ClassesScreen} />
        <Tab.Screen name="Roster" component={RosterScreen} />
        <Tab.Screen name="Camera" component={CameraScreen} />
      </Tab.Navigator>
    );
  }

  return <NavigationContainer>{
    <Stack.Navigator>
      <Stack.Screen name="Home" component={MainTabNavigator} options={{ headerShown: false }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}> 
      {/* presentation: modal means that all screens in this group will have top to bottom animations */}
        <Stack.Screen name="AddStudent" component={AddStudentScreen} />
      </Stack.Group>
    </Stack.Navigator>
    }</NavigationContainer>;
}
