import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList, Button, TouchableOpacity, Text } from "react-native";
import { StudentCell } from "./components/StudentCell";
import { styles } from "./RosterScreen.styles";
import firebase from "firebase/compat/app";
import { limitToLast } from "firebase/firestore";
import { ActivityIndicator } from "react-native-web";
import { render } from "react-dom";

// We can use JSON files by simply requiring them.
const TABLE_DATA = require("../../assets/classes.json");

// Input: navigation & route params, which we recieve through React Navigation
// Output: a screen containing the list of movies
export default function MovieListScreen({ navigation, route }) {
  const [search, setSearch] = useState("");
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actors, setActors] = useState([]);
  // const movieItem = route.params.movieItem;
  const className = route.params.classItem;

  const selectedAddStudentButton = () => {
    // console.log(route);
    navigation.navigate('AddStudentScreen', {classItem: route.params.classItem, className: route.params.classItem.name})
  }

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

  useEffect(() => {
    const subscriber = firebase.firestore()
      .collection(className.name)
      .onSnapshot(querySnapshot => {
        const students = [];
  
        querySnapshot.forEach(documentSnapshot => {
          students.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
  
        setStudents(students);
        setLoading(false);
      });
  
    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  // if (loading) {
  //   return <ActivityIndicator />
  // }

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
        data={students}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}
