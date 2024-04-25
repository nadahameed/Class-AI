import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList, Button, TouchableOpacity, Text } from "react-native";
import { SearchBar } from "react-native-elements";
import { MovieCell } from "./components/MovieCell";
import { styles } from "./MovieListScreen.styles";
import MovieDetailScreen from "../MovieDetailScreen/MovieDetailScreen.main";

// We can use JSON files by simply requiring them.
const TABLE_DATA = require("../../assets/movies.json");

// Input: navigation & route params, which we recieve through React Navigation
// Output: a screen containing the list of movies
export default function MovieListScreen({ navigation }) {
  const [search, setSearch] = useState("");
  const [actors, setActors] = useState([]);

  // TODO: Fill out the methods below.
  const selectedMovie = (movieItem) => {
    navigation.navigate('MovieDetailScreen', {movie: movieItem});
  };

  const selectedFilterButton = () => {
    navigation.navigate('AddStudentScreen')
    //navigation.navigate('MovieFilterScreen', {actors});
  };

  useEffect(
    () => {
      // TODO: Add a "Filter" button to the right bar button.
      // It should lead to the MovieFilterScreen, and pass the "actors" state
      // variable as a parameter.
      navigation.setOptions({
        headerRight: () => (
          <Button
            onPress={selectedFilterButton}
            title="Filter"
          />
        )
      })
    },
    [
      /* TODO: Insert dependencies here. */
    ]
  );


  // Renders a row of the FlatList.
  const renderItem = ({ item }) => {
    const overlapFound = (listA, listB) => {
      let foundActor = false;
      listA.forEach((x) => {
        if (listB.includes(x)) {
          foundActor = true;
        }
      });
      return foundActor;
    };

    // TODO: Set up search & filter criteria.
    let meetsSearchCriteria = true;
    if (!item.title.toLowerCase().includes(search.toLowerCase())) {
      meetsSearchCriteria = false;
    }
    let meetsActorsCriteria = true;
    if (actors.length > 0) {
      meetsActorsCriteria = overlapFound(actors, item.actors);
    }

    if (meetsSearchCriteria && meetsActorsCriteria) {
      // TODO: Return a MovieCell, wrapped by a TouchableOpacity so we can handle taps.
      return (
        <TouchableOpacity onPress={() => selectedMovie(item)}>
          <MovieCell movieItem={item}></MovieCell>
        </TouchableOpacity>
      );
    } else {
      // If the item doesn't meet search/filter criteria, then we can
      // simply return null and it won't be rendered in the list!
      return null;
    }
  };

  // Our final view consists of a search bar and flat list, wrapped in
  // a SafeAreaView to support iOS.
  return (
    <SafeAreaView style={styles.container}>
      {/* TODO: Add a SearchBar: https://reactnativeelements.com/docs/searchbar/.
                The third-party package should already be installed for you. */}
      <SearchBar
        placeholder="what movie?"
        onChangeText={(x) => setSearch(x)} //x can be anything it actually does not matter
        value={search}
      />
      {/* TODO: Add a FlatList: https://reactnative.dev/docs/flatlist */}
      <FlatList
        data={TABLE_DATA}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}
