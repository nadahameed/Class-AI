import React from "react";
import { View, Image, Text } from "react-native";
import { styles } from "../ClassesScreen.styles";
import { ImageBackground } from "react-native-web";

export const ClassCell = ({ movieItem }) => {
  // TODO: Create and return the MovieCell component.
  // HINT: Take a look at the movieCell styles, as well as the video
  // demo in the spec, to figure out what this should look like.

  return (
    <View style={styles.classCell}>
      <View style={styles.classCellLeft}>
        <Image style={styles.classCellImage} source={{uri: movieItem.icon}}/>
      </View>
      <View style={styles.classCellRight}>
        <Text style={styles.classCellTitle}>{movieItem.name}</Text>
      </View>
    </View>
  );
};
