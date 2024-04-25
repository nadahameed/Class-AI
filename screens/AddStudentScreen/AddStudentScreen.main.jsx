import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  FlatList,
  View,
  TouchableOpacity,
  Text,
  Button,
  Image
} from "react-native";

import { getAllActors } from "../../constants/Constants";
import { styles } from "./AddStudentScreen.styles";
import { TextInput } from "react-native-gesture-handler";
import * as ImagePicker from 'expo-image-picker';
import UploadMediaFile from "./components/UploadMediaFile";
import { firebase } from "../../config";
import * as FileSystem from 'expo-file-system';

// Input: navigation & route params, which we recieve through React Navigation
// Output: a Movie Filter Screen component, which displays a list of actors to filter on.
export default function AddStudentScreen({ navigation, route }) {

  const className = route.params.className;
  const classItem = route.params.classItem;
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [srcPath, setSrcPath] = useState('');
  const addStudent = async () => {
    try {
      const studentData = {
        name: name,
        image: name + ".jpg",
      };
      await firebase.firestore().collection(className).add(studentData);
      console.log("Student added successfully");
    } catch (error) {
      console.log(error);
      alert(`Failed to add student: ${error}`);
    }
  }
  const [uploading, setUploading] = useState(false);

  const handleImagePickerPress = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1
    });
    setImage(result.assets[0].uri);
    console.log(image);
    uploadMedia();
    addStudent();
  }

  const uploadMedia = async () => {
    setUploading(true);

  try {
    const { uri } = await FileSystem.getInfoAsync(image);
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });
    const filename = name + ".jpg";
    setSrcPath(filename);
    const ref = firebase.storage().ref().child(filename);

    await ref.put(blob);
    setUploading(false);
    alert("Upload successful");
    setImage("");
  } catch (error) {
    console.log(error);
    alert(`Upload failed: ${error}`);
  }
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
              navigation.navigate("RosterScreen", {classItem: classItem})
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
          {className}
        </Text>
        <TextInput style={styles.filtercell}
        clearButtonMode="while-editing"
        onChangeText={name => setName(name)} 
        placeholderTextColor="#6b7280"
        placeholder="Student Name" />
        <TouchableOpacity style = {styles.filtercell} onPress={handleImagePickerPress}>
          <Text style={{ fontFamily: "Avenir", fontSize: 16}}>
            {"Upload Photo"}
          </Text>
        </TouchableOpacity>
        { image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View>
    </SafeAreaView>
  );
}
