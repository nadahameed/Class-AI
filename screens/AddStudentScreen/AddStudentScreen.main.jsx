import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  FlatList,
  View,
  TouchableOpacity,
  Text,
  Button,
} from "react-native";

import { getAllActors } from "../../constants/Constants";
import { styles } from "./AddStudentScreen.styles";
import { TextInput } from "react-native-gesture-handler";
import * as ImagePicker from 'expo-image-picker';

// Input: navigation & route params, which we recieve through React Navigation
// Output: a Movie Filter Screen component, which displays a list of actors to filter on.
export default function AddStudentScreen({ navigation }) {
  const [student, setStudent] = useState({
    name: '',
    photo: '',
    class: ''
  });

  const [image, setImage] = useState('');

  const handleImagePickerPress = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1
    });
  }

  useEffect(
    () => {
      // TODO: Override the default back button to...
      //  1) Hide the left button.
      //  2) Show a "Done" button on the right that navigates back to the MovieListScreen
      //      and passes back our current list of actors via params.
      // https://reactnavigation.org/docs/header-buttons/
      navigation.setOptions({
        headerLeft: () => null,
        headerRight: () => (
          <Button
            title="Done"
            onPress={() => {
              navigation.navigate("MovieListScreen")
            }}
          />
        )
      })
    },
  );

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{ fontFamily: "Avenir", fontSize: 22, margin: 20 }}>
          {"Add Student to Roster"}
        </Text>
        <TextInput style={styles.filtercell}
        clearButtonMode="while-editing"
        onChangeText={name => setStudent({ ...student, name })} 
        placeholderTextColor="#6b7280"
        placeholder="Student Name" />
        <TouchableOpacity style = {styles.filtercell}>
          <Text style={{ fontFamily: "Avenir", fontSize: 16}}>
            {"Upload Photo"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
