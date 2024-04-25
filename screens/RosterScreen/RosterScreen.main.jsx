import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList, Button, TouchableOpacity, Text } from "react-native";
import { StudentCell } from "./components/StudentCell";
import { styles } from "./RosterScreen.styles";

// We can use JSON files by simply requiring them.
const TABLE_DATA = require("../../assets/classes.json");

// Input: navigation & route params, which we recieve through React Navigation
// Output: a screen containing the list of movies
export default function MovieListScreen({ navigation, route }) {
  const [actors, setActors] = useState([]);


  const selectedAddStudentButton = () => {
    navigation.navigate('AddStudentScreen', {filteredActors: actors})
  };

  useEffect(
    () => {
      // TODO: Add a "Filter" button to the right bar button.
      // It should lead to the MovieFilterScreen, and pass the "actors" state
      // variable as a parameter.
      navigation.setOptions({
        headerRight: () => (
          <Button
            onPress={selectedAddStudentButton}
            title="+"
          />
        )
      })
    },
    [
      /* TODO: Insert dependencies here. */
    ]
  );

  useEffect(
    () => {
      /* TODO: Recieve the updated list of actors from the filter screen here. 
          See https://reactnavigation.org/docs/params/#passing-params-to-a-previous-screen
          for an example of how to send data BACKWARDS in the navigation stack.
      */
      if (route.params?.filteredActors) {
        setActors(route.params.filteredActors)
      }
    },
    [
      /* TODO: Insert dependencies here. What variable changes 
        when we come back from the filter screen? */
      route.params?.filteredActors
    ]
  );

  // Renders a row of the FlatList.
  const renderItem = ({ item }) => {
    // TODO: Set up search & filter criteria.
    return (
      <StudentCell movieItem={item}></StudentCell>
    );
  };

  // Our final view consists of a search bar and flat list, wrapped in
  // a SafeAreaView to support iOS.
  return (
    <SafeAreaView style={styles.container}>
      {/* TODO: Add a SearchBar: https://reactnativeelements.com/docs/searchbar/.
                The third-party package should already be installed for you. */}
      {/* TODO: Add a FlatList: https://reactnative.dev/docs/flatlist */}
      <FlatList
        data={TABLE_DATA}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}
