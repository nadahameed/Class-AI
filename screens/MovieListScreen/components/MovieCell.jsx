import React from "react";
import { View, Image, Text } from "react-native";
import { styles } from "../MovieListScreen.styles";
import { ImageBackground } from "react-native-web";

export const MovieCell = ({ movieItem }) => {
  // TODO: Create and return the MovieCell component.
  // HINT: Take a look at the movieCell styles, as well as the video
  // demo in the spec, to figure out what this should look like.

  //movieItem has keys id, title, year, genres, ratings
  //poster, contentRating, duration, releaseDate, averageRating,
  //originalTitle, storyline, actors, imdbRating, posterurl

  return (
    <View style={styles.movieCell}>
      <View style={styles.movieCellLeft}>
        <Image style={styles.movieCellImage} source={{uri: movieItem.posterurl}}/>
      </View>
      <View style={styles.movieCellRight}>
        <Text style={styles.movieCellTitle}>{movieItem.title}</Text>
        <Text style={styles.movieCellSubtitle}>
          {movieItem.actors.join(", ")}
          </Text>
      </View>
    </View>
  );
};
