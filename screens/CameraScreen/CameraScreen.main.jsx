import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList, Button, TouchableOpacity, Text } from "react-native";
import { styles } from "./ClassesScreen.styles";
import RosterScreen from "../RosterScreen/RosterScreen.main";

// We can use JSON files by simply requiring them.
const TABLE_DATA = require("../../assets/classes.json");

// Input: navigation & route params, which we recieve through React Navigation
// Output: a screen containing the list of movies
export default function CameraScreen({ navigation, route }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* TODO: Add a SearchBar: https://reactnativeelements.com/docs/searchbar/.
                The third-party package should already be installed for you. */}
      {/* TODO: Add a FlatList: https://reactnative.dev/docs/flatlist */}
    </SafeAreaView>
  );
}
